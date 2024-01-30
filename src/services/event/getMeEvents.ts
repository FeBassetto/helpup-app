import { api } from "@services/api";

interface FetchEventsProps {
  token: string;
  offset: number;
  query: string;
}

export async function fetchMeEvents({
  offset,
  query,
  token,
}: FetchEventsProps) {
  const response = await api.get("/events/me", {
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
