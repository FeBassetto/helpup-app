import { api } from "@services/api";

interface UpdateFriendShipProps {
  token: string;
  id: string;
  isAccept: boolean;
}

export async function updateFriendShip({
  token,
  id,
  isAccept,
}: UpdateFriendShipProps) {
  const response = await api.patch(
    `/friendships/status/${id}`,
    {
      accept: isAccept,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
