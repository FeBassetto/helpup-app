import { api } from "@services/api";

interface JoinEventProps {
  token: string;
  id: string;
}

export async function joinEvent({ token, id }: JoinEventProps) {
  const response = await api.post(
    `/events/join/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
