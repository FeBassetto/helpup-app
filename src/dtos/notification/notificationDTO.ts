export interface NotificationDTO {
  id: string;
  type: string;
  redirect_id: string;
  read_at: string | null;
  created_at: string;
  user_id: string;
}

export interface NotificationsResponse {
  notifications: NotificationDTO[];
  totalPages: number;
  error?: boolean;
  message?: string;
  type?: string;
}
