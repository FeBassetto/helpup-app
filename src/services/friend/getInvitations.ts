import { api } from "@services/api";

interface FetchFriendsInvitationsProps {
  token: string;
  isSentInvites: boolean;
}

export async function fetchFriendsInvitations({
  isSentInvites,
  token,
}: FetchFriendsInvitationsProps) {
  const response = await api.get("/friendships/invites", {
    params: {
      isSentInvites,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
