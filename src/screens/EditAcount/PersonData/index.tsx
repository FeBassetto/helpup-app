import { Input } from "@components/Input";
import { CenterContainer } from "../styles";
import { useState } from "react";
import { Button } from "@components/Button";
import { useMutation, useQueryClient } from "react-query";
import { updateUserData } from "@services/user/updateUserData";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { processApiResponse } from "@utils/processApiResponse";
import { showError } from "@utils/showError";
import { ProfileImage } from "@components/ProfileImage";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { showSuccess } from "@utils/showSuccess";
import { updateImageData } from "@services/user/updateUserImage";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

interface PersonDataProps {
  name: string;
  nick: string;
  uri: string;
}

export function PersonData({ name, nick, uri }: PersonDataProps) {
  const [fullName, setFullName] = useState(name);
  const [newNick, setNewNick] = useState(nick);

  const queryClient = useQueryClient();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { token } = useSelector((state: RootState) => state.auth);

  const { mutate, isLoading } = useMutation(updateUserData, {
    onSuccess: (data) => {
      const { error } = processApiResponse({
        apiData: data,
        defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
        successMessage: "Dados atualizados com sucesso!",
      });

      if (!error) {
        queryClient.refetchQueries(["meProfile"]);
      }
    },
    onError: () => {
      showError(
        "Não foi possível executar a ação, tente novamente mais tarde!"
      );
    },
  });

  const { mutate: photoMutate, isLoading: photoIsLoading } = useMutation(
    updateImageData,
    {
      onSuccess: (data) => {
        const { error } = processApiResponse({
          apiData: data,
          defaultErrorMessage: "Ocorreu um erro, tente novamente mais tarde!",
          successMessage: "Foto atualizada com sucesso!",
        });

        if (!error) {
          queryClient.refetchQueries(["meProfile"]);
        }
      },
      onError: () => {
        showError(
          "Não foi possível executar a ação, tente novamente mais tarde!"
        );
      },
    }
  );

  const handleSavePress = () => {
    mutate({ name: fullName, nick: newNick, token });
  };

  async function handleUserPhotoSelect() {
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (selectedPhoto.canceled) {
        return;
      }

      const photoUri = selectedPhoto.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri, {
          size: true,
        })) as FileSystem.FileInfo & { size: number };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return showError("Imagem muito grande. Escolha uma de ate 5mb");
        }

        const fileExtension = photoUri.split(".").pop();

        const photoFile = {
          name: `${fullName}.${fileExtension}`.toLowerCase(),
          uri: photoUri,
          type: `${selectedPhoto.assets[0].type}/${fileExtension}`,
        } as any;

        const userPhotoUploadForm = new FormData();

        userPhotoUploadForm.append("file", photoFile);

        photoMutate({ token, data: userPhotoUploadForm });
      }
    } catch (error) {
      return showError(
        "Ocorreu um erro ao salvar a imagem, tente novamente mais tarde!"
      );
    }
  }

  return (
    <CenterContainer>
      <ProfileImage uri={uri} onPress={handleUserPhotoSelect} />
      <Input
        onTextChange={setFullName}
        placeholder="Nome completo"
        value={fullName}
        hasText={!!fullName}
        keyboardType="email-address"
      />
      <Input
        onTextChange={setNewNick}
        placeholder="Apelido"
        value={newNick}
        hasText={!!newNick}
      />
      <Button
        background="dark"
        onPress={handleSavePress}
        value="Salvar"
        isLoading={isLoading || photoIsLoading}
      />
      <Button
        background="dark"
        onPress={() => {}}
        value="Trocar senha"
        outline
        style={{ marginTop: 20 }}
      />
    </CenterContainer>
  );
}
