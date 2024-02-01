import { api } from "@services/api";

interface SendFriendshipProps {
  token: string;
  friendId: string;
}

export async function sendFriendship({ token, friendId }: SendFriendshipProps) {
  const response = await api.post(
    `/friendships/send`,
    {
      sentUserId: friendId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
