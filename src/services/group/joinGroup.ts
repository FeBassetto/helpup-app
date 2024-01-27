import { api } from "@services/api";

interface JoinGroupProps {
  token: string;
  id: string;
}

export async function joinGroup({ token, id }: JoinGroupProps) {
  const response = await api.post(`/groups/join/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
