import { api } from "@services/api";

interface FetchEventProps {
  token: string;
  offset: number;
  query: string;
  id: string;
}

export async function fetchEvent({
  offset,
  query,
  token,
  id,
}: FetchEventProps) {
  const response = await api.get(`/events/${id}`, {
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
