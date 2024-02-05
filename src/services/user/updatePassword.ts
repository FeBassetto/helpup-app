import { api } from "@services/api";

interface UpdateUserPasswordProps {
  token: string;
  password: string;
  confirm_password: string;
}

export async function updateUserPassword({
  token,
  password,
  confirm_password,
}: UpdateUserPasswordProps) {
  const response = await api.patch(
    `/users/password`,
    {
      password,
      confirm_password,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
