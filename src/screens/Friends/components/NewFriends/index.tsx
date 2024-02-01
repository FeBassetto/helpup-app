import { Button } from "@components/Button";
import { DataList } from "@components/DataList";
import { FriendsResponse } from "@dtos/friends/friendDTO";
import { S3_BASE_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ContentContainer } from "@screens/Friends/styles";
import { fetchFriends } from "@services/friend/getFriends";
import { RootState } from "@store/reducer";
import { debounce } from "@utils/debounce";
import { showError } from "@utils/showError";
import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

interface NewFriendsProps {
  focus: boolean;
}

export function NewFriends({ focus }: NewFriendsProps) {
  const { token } = useSelector((state: RootState) => state.auth);

  const [offset, setOffset] = useState(0);
  const [friendText, setFriendsText] = useState("");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const debouncedInputChange = useCallback(
    debounce((text: string) => {
      setFriendsText(text);
    }, 500),
    []
  );

  const handleSearchPress = (text: string) => {
    setFriendsText(text);
  };

  const handleBack = () => {
    setOffset((prevOffset) => prevOffset - 1);
  };

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  const handlePagination = (page: number) => {
    setOffset(page - 1);
  };

  const { data, isFetching, error } = useQuery<AxiosResponse<FriendsResponse>>(
    ["newFriends", offset, friendText, focus],
    () => fetchFriends({ token, offset, query: friendText })
  );

  if (error || data?.data?.error) {
    showError(
      data?.data.message || "Ocorreu um erro, tente novamente mais tarde!"
    );
    navigation.goBack();

    return <></>;
  }

  const dataList =
    data?.data?.friends.map((friend) => ({
      id: friend.id,
      title: friend.name,
      profileUrl: `${S3_BASE_URL}${friend.profile_url}`,
      nick: friend.nick,
      local: friend.city,
    })) || [];

  const totalPages = data?.data?.totalPages || 1;

  return (
    <DataList
      onChangeSearchText={debouncedInputChange}
      onSearchPress={handleSearchPress}
      searchPlaceholder="Pesquise um amigo..."
      cardButtonTitle="Ver mais"
      list={dataList}
      type="user"
      onCardButtonPress={(id) => {
        navigation.navigate("friend", { id });
      }}
      activePage={offset + 1}
      totalPages={totalPages}
      isLoading={isFetching}
      emptyButtonPressed={() => navigation.navigate("createGroup")}
      emptyButtonText="Convidar novos amigos!"
      emptyMessage="Não encontramos nenhum amigo na sua região. Aproveita e convide novos amigos!"
      onBackPage={handleBack}
      onNextPage={handleNext}
      onPagination={handlePagination}
    />
  );
}
