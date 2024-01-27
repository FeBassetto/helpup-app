import { api } from "@services/api";

interface UpdateGroupProps {
  token: string;
  id: string;
  title: string;
  description: string;
  city: string;
}

export async function updateGroup({
  token,
  id,
  title,
  description,
  city,
}: UpdateGroupProps) {
  const response = await api.patch(
    `/groups/${id}`,
    {
      title,
      description,
      city,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
