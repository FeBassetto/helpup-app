export type EventType = "physical" | "visual" | "auditory" | "mental";

export interface Event {
  id: string;
  title: string;
  description: string;
  street: string;
  city: string;
  created_at: string;
  admin_id: string;
  date: string;
  group_id: string | null;
  type: EventType;
  number: number;
  latitude: string;
  longitude: string;
  neighborhood: string;
  distance: number;
}
