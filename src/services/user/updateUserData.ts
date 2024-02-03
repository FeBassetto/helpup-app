import { api } from "@services/api";

interface UpdateUserDataProps {
  token: string;
  name?: string;
  nick?: string;
  cep?: string;
  neighborhood?: string;
  street?: string;
  city?: string;
  number?: string;
}

export async function updateUserData({
  token,
  name,
  nick,
  cep,
  city,
  neighborhood,
  number,
  street,
}: UpdateUserDataProps) {
  const dataToUpdate = Object.fromEntries(
    Object.entries({
      name,
      nick,
      cep,
      city,
      neighborhood,
      number: Number(number),
      street,
    }).filter(([_, value]) => value !== undefined)
  );

  const response = await api.patch(`/users`, dataToUpdate, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
