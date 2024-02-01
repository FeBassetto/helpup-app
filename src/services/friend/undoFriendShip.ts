import { api } from "@services/api";

interface UndoFriendShipProps {
  token: string;
  id: string;
}

export async function undoFriendShip({ token, id }: UndoFriendShipProps) {
  const response = await api.delete(`/friendships/undo/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
