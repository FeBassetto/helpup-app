export interface User {
  id: string;
  name: string;
  nick: string;
  description: string;
  profile_url: string;
  email: string;
  city: string;
  longitude: string;
  latitude: string;
  cep: string;
  created_at: string;
}

export interface UserResponse {
  user: { data: User };
  error?: boolean;
  message?: string;
  type?: string;
}
