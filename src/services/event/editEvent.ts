import { api } from "@services/api";

interface UpdateEventProps {
  token: string;
  id: string;
  title: string;
  description: string;
  city: string;
  date: string;
  street: string;
  number: number;
  type: string;
  neighborhood: string;
}

export async function updateEvent({
  token,
  id,
  title,
  description,
  city,
  date,
  street,
  number,
  type,
  neighborhood,
}: UpdateEventProps) {
  const response = await api.patch(
    `/events/${id}`,
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
