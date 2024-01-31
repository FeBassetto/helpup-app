import { api } from "@services/api";

interface UnjoinEventProps {
  token: string;
  id: string;
}

export async function unjoinEvent({ token, id }: UnjoinEventProps) {
  const response = await api.post(
    `/events/unjoin/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
