import { api } from "./api";

interface RegisterServiceRequest {
  name: string;
  nick: string;
  email: string;
  password: string;
  cep: string;
  neighborhood: string;
  street: string;
  city: string;
  number?: number;
}

export async function registerService(data: RegisterServiceRequest) {
  const response = await api.post("/users", data);

  return response;
}
