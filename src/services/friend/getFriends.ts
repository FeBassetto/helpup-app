import { api } from "@services/api";

interface FetchFriendsProps {
  token: string;
  offset: number;
  query: string;
}

export async function fetchFriends({
  offset,
  query,
  token,
}: FetchFriendsProps) {
  const response = await api.get("/friendships/suggestions", {
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
