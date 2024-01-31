import { api } from "@services/api";

interface DeleteEventProps {
  token: string;
  id: string;
}

export async function deleteEvent({ token, id }: DeleteEventProps) {
  const response = await api.delete(`/events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
