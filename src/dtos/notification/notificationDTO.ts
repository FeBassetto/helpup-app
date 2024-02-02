export type NotificationType =
  | "friendship_invitation"
  | "friendship_accept"
  | "group_created"
  | "event_created";

export interface NotificationDTO {
  id: string;
  type: NotificationType;
  redirect_id: string;
  read_at: string | null;
  created_at: string;
  user_id: string;
  title: string;
}

export interface NotificationsResponse {
  notifications: NotificationDTO[];
  totalPages: number;
  error?: boolean;
  message?: string;
  type?: string;
}
