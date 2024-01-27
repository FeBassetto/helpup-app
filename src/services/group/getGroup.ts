import { api } from "@services/api";

interface FetchGroupProps {
  token: string;
  offset: number;
  query: string;
  id: string;
}

export async function fetchGroup({
  offset,
  query,
  token,
  id,
}: FetchGroupProps) {
  const response = await api.get(`/groups/${id}`, {
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
