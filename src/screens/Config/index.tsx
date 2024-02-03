import { Header } from "@components/Header";
import {
  ConfigContainer,
  ConfigTitle,
  Container,
  ContentContainer,
  SettingInformationContainer,
  SettingText,
  SettingsContainer,
} from "./styles";
import {
  Bell,
  IconProps,
  Info,
  Password,
  Question,
  SignOut,
  Trash,
  UserCircle,
  Warning,
  WarningCircle,
} from "phosphor-react-native";
import theme from "@theme/index";
import { useDispatch } from "react-redux";
import { logOut } from "@store/actions/authActions";
import { useContext } from "react";
import { PopUpContext } from "@contexts/PopUpContext";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useMutation } from "react-query";
import { deleteUser } from "@services/user/deleteUser";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { storageClear } from "@storage/storage";
import { showSuccess } from "@utils/showSuccess";

interface Setting {
  Icon: React.ElementType<IconProps>;
  text: string;
  action: () => void;
}

interface SettingsSectionProps {
  title: string;
  settings: Setting[];
}

const iconProps: IconProps = {
  size: 32,
  weight: "fill",
  color: theme.COLORS.PURPLE_300,
};

const SettingsSection = ({ title, settings }: SettingsSectionProps) => (
  <ConfigContainer>
    <ConfigTitle>{title}</ConfigTitle>
    <SettingsContainer>
      {settings.map((setting, index) => (
        <SettingItem key={index} {...setting} />
      ))}
    </SettingsContainer>
  </ConfigContainer>
);

const SettingItem = ({ Icon, text, action }: Setting) => (
  <SettingInformationContainer onPress={action}>
    <Icon {...iconProps} />
    <SettingText>{text}</SettingText>
  </SettingInformationContainer>
);

export function Config() {
  const dispatch = useDispatch();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { token } = useSelector((state: RootState) => state.auth);
  const { openModal } = useContext(PopUpContext);

  const { mutate } = useMutation(deleteUser, {
    onSuccess: (data) => {
      processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage:
          "Enviamos uma confirmação para seu email, confirme para excluir sua conta!",
      });
    },
    onError: () => {
      showError(
        "Não foi possível deletar sua conta, tente novamente mais tarde!"
      );
    },
  });

  const handleDeleteUser = () => {
    mutate({ deleteData: true, token });
  };

  const handleClearCache = async () => {
    await storageClear();
    showSuccess("Armazenamento foi limpo!");
  };

  const settings = [
    {
      title: "Conta",
      settings: [
        {
          Icon: UserCircle,
          text: "Editar Conta",
          action: () => {
            navigation.navigate("editAccount");
          },
        },
        { Icon: Password, text: "Trocar Senha", action: () => {} },
        {
          Icon: Bell,
          text: "Notificações",
          action: () => {
            navigation.navigate("notifications");
          },
        },
      ],
    },
    {
      title: "Suporte & Sobre",
      settings: [
        { Icon: Question, text: "Ajuda e Suporte", action: () => {} },
        { Icon: Info, text: "Termos e políticas de uso", action: () => {} },
      ],
    },
    {
      title: "Cache & Celular",
      settings: [
        {
          Icon: Trash,
          text: "Limpar armazenamento",
          action: () => {
            openModal(handleClearCache);
          },
        },
      ],
    },
    {
      title: "Ações",
      settings: [
        { Icon: Warning, text: "Reportar problema", action: () => {} },
        {
          Icon: WarningCircle,
          text: "Excluir Conta",
          action: () => {
            openModal(handleDeleteUser);
          },
        },
        {
          Icon: SignOut,
          text: "Sair da conta",
          action: () => {
            dispatch(logOut());
          },
        },
      ],
    },
  ];
  return (
    <Container>
      <ContentContainer>
        {settings.map((section, index) => (
          <SettingsSection key={index} {...section} />
        ))}
      </ContentContainer>
    </Container>
  );
}
