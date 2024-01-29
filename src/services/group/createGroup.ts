import { api } from "@services/api";

interface CreateGroupProps {
  token: string;
  title: string;
  description: string;
}

export async function createGroup({
  token,
  title,
  description,
}: CreateGroupProps) {
  const response = await api.post(
    `/groups`,
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
