import { api } from "@services/api";

interface MarkNotificationReadProps {
  token: string;
  id: string;
  readAll: boolean;
}

export async function markNotificationRead({
  token,
  id,
  readAll,
}: MarkNotificationReadProps) {
  const response = await api.post(
    `/notifications/read`,
    {
      notificationId: id,
      readAll,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
