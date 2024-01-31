import { api } from "@services/api";

interface CreateEventProps {
  token: string;
  title: string;
  description: string;
  city: string;
  date: string;
  street: string;
  number: number;
  type: string;
  neighborhood: string;
}

export async function createEvent({
  token,
  title,
  description,
  city,
  date,
  street,
  number,
  type,
  neighborhood,
}: CreateEventProps) {
  const response = await api.post(
    `/events`,
    {
      title,
      description,
      city,
      date,
      street,
      number,
      type,
      neighborhood,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
