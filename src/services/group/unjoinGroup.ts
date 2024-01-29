import { api } from "@services/api";

interface UnjoinGroupProps {
  token: string;
  id: string;
}

export async function unjoinGroup({ token, id }: UnjoinGroupProps) {
  const response = await api.post(
    `/groups/unjoin/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
