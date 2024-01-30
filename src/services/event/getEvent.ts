import { EventType } from "@dtos/event/eventDTO";
import { api } from "@services/api";

interface FetchEventsProps {
  token: string;
  offset: number;
  query: string;
  eventType?: EventType;
}

export async function fetchEvents({
  offset,
  query,
  token,
  eventType,
}: FetchEventsProps) {
  const params = {
    offset: offset,
    query: query,
    ...(eventType && { type: eventType }),
  };

  const response = await api.get("/events", {
    params: params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
