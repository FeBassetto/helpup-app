import { api } from "@services/api";

interface FetchNotificationsProps {
  token: string;
  onlyNew: boolean;
}

export async function fetchMeNotifications({
  onlyNew,
  token,
}: FetchNotificationsProps) {
  const response = await api.get("/notifications", {
    params: {
      onlyNew,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
