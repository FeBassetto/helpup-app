import { APP, API_DEV, API_PROD } from "@env";
import axios from "axios";

const baseURL = APP === "production" ? API_PROD : API_DEV;

export const api = axios.create({ baseURL });

api.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    return Promise.resolve(response);
  }
);
