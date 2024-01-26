import { api } from "@services/api";

interface FetchGroupsProps {
  token: string;
  offset: number;
  query: string;
}

export async function fetchMeGroups({
  offset,
  query,
  token,
}: FetchGroupsProps) {
  const response = await api.get("/groups/me", {
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
