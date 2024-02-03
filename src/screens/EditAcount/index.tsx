import { Slider } from "@components/Slider";
import { ContentContainer, FullContainer } from "./styles";
import { PersonData } from "./PersonData";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { UserResponse } from "@dtos/user/userDTO";
import { fetchMeUser } from "@services/user/getProfile";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { Logo } from "@components/Logo";
import { Loader } from "@components/Loader";
import { showError } from "@utils/showError";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { S3_BASE_URL } from "@env";
import { Address } from "./Address";

export function EditAccount() {
  const { token } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { data, isFetching, error } = useQuery<AxiosResponse<UserResponse>>(
    ["meProfile"],
    () => fetchMeUser({ token }),
    {}
  );

  if (isFetching) {
    return (
      <FullContainer>
        <Logo type="primary" />
        <Loader type="dark" />
      </FullContainer>
    );
  }

  if (error || data?.data?.error || !data?.data) {
    showError(
      data?.data.message || "Ocorreu um erro, tente novamente mais tarde!"
    );
    navigation.goBack();

    return <></>;
  }

  const { name, nick, profile_url, cep } = data.data.user.data;

  const fullUri = `${S3_BASE_URL}${profile_url}`;

  return (
    <ContentContainer>
      <Slider
        firstContent={<PersonData name={name} nick={nick} uri={fullUri} />}
        firstTitle="Dados pessoais"
        secondContent={<Address cep={cep} />}
        secondTitle="Endereço"
      />
    </ContentContainer>
  );
}
