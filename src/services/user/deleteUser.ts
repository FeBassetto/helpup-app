import { api } from "@services/api";

interface DeleteUserProps {
  token: string;
  deleteData: boolean;
}

export async function deleteUser({ token, deleteData }: DeleteUserProps) {
  const response = await api.post(
    `/users/delete-mail`,
    { deleteData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
