import { api } from "@services/api";

export async function resetPassword(email: string) {
  const response = await api.post("/users/reset-password", {
    email: email.toLowerCase(),
  });

  return response;
}
