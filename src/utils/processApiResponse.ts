import { AxiosResponse } from "axios";
import { showError } from "./showError";
import { showSuccess } from "./showSuccess";
import { parseValidationErrors } from "./parseValidationErrors";

interface processApiResponseProps {
  apiData: AxiosResponse<any>;
  successMessage: string;
  defaultErrorMessage: string;
}

interface ProcessApiResult {
  error: boolean;
}

export function processApiResponse({
  apiData,
  defaultErrorMessage,
  successMessage,
}: processApiResponseProps): ProcessApiResult {
  const { data = {}, status } = apiData;

  if (data?.error || status < 200 || status > 299) {
    if (data.issues) {
      const validationMessage = parseValidationErrors(data);
      showError(validationMessage);
    } else {
      showError(data?.message || defaultErrorMessage);
    }

    return { error: true };
  }

  showSuccess(successMessage);
  return { error: false };
}
