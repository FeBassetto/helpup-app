import { api } from "./api";

interface LoginServiceRequest {
  email: string;
  password: string;
}

export async function loginService({ email, password }: LoginServiceRequest) {
  const response = await api.post("/users/sessions", {
    email: email.toLowerCase(),
    password,
  });

  return response;
}
