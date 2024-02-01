export interface Friend {
  id: string;
  name: string;
  description: string;
  email: string;
  city: string;
  nick: string;
  profile_url: string;
}

export interface FriendsResponse {
  friends: Friend[];
  totalPages: number;
  error?: boolean;
  message?: string;
  type?: string;
}

interface User {
  id: string;
  name: string;
  nick: string;
  description: string;
  profile_url: string;
  city: string;
  created_at: string;
}

interface EventsResponse {
  events: Event[];
  totalPages: number;
}

export interface UserResponse {
  user: {
    data: User;
    isFriends: boolean | "pending" | "reject" | "pending-accept";
    friendShipId: string;
  };
  friendShips: any[];
  totalFriendsPage: number;
  events: EventsResponse;
}
