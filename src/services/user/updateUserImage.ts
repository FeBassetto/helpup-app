import { api } from "@services/api";

interface UpdateImageDataProps {
  token: string;
  data: FormData;
}

export async function updateImageData({ token, data }: UpdateImageDataProps) {
  const response = await api.patch(`/users`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response;
}
