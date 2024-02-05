import { api } from "@services/api";

interface SendComplaintProps {
  token: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  observations: string;
}

export async function sendComplaint({
  token,
  email,
  fullName,
  observations,
  phoneNumber,
}: SendComplaintProps) {
  const response = await api.post(
    `/users/send-complaint`,
    {
      email,
      fullName,
      observations,
      phoneNumber,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
