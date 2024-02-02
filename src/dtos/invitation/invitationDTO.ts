interface Invitation {
  id: string;
  friendId: string;
  friendName: string;
  created_at: string;
}

export interface InvitationsResponse {
  totalPages: number;
  invitations: Invitation[];
  error?: boolean;
  message?: string;
  type?: string;
}
