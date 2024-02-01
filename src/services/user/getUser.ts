import { api } from "@services/api";

interface FetchUserProps {
  token: string;
  id: string;
  offset: number;
  query: string;
}

export async function fetchUser({ token, id, offset, query }: FetchUserProps) {
  const response = await api.get(`/users/profile/${id}`, {
    params: {
      offset: offset,
      query: query,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
