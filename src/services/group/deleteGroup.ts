import { api } from "@services/api";

interface DeleteGroupProps {
  token: string;
  id: string;
}

export async function deleteGroup({ token, id }: DeleteGroupProps) {
  const response = await api.delete(`/groups/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
