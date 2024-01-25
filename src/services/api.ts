import { APP, API_DEV, API_PROD } from "@env";
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "@storage/storageAuthToken";
import { clearAuth } from "@store/actions/authActions";
import { store } from "@store/index";
import { showError } from "@utils/showError";
import axios from "axios";

const baseURL = APP === "production" ? API_PROD : API_DEV;

export const api = axios.create({ baseURL });

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.data &&
      error.response.data.type === "EXPIRED_TOKEN" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { refreshToken } = await storageAuthTokenGet();

        const response = await axios.patch(
          `${baseURL}/users/token/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        if (response.data) {
          const { refreshToken: refreshTokenResponse, token } = response.data;

          await storageAuthTokenSave({
            refreshToken: refreshTokenResponse,
            token,
          });

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return api(originalRequest);
        }

        throw new Error("No data in refresh token response");
      } catch (refreshError) {
        await storageAuthTokenRemove();
        store.dispatch(clearAuth());
        showError("Sua sessão expirou, faça o login novamente!");
        return Promise.resolve(error.response);
      }
    }
    return Promise.resolve(error.response);
  }
);
