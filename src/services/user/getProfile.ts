import { api } from "@services/api";

interface FetchMeUserProps {
  token: string;
}

export async function fetchMeUser({ token }: FetchMeUserProps) {
  const response = await api.get(`/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
