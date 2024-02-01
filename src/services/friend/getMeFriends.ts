import { api } from "@services/api";

interface FetchMeFriendsProps {
  token: string;
  offset: number;
  query: string;
}

export async function fetchMeFriends({
  offset,
  query,
  token,
}: FetchMeFriendsProps) {
  const response = await api.get("/friendships/me", {
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
