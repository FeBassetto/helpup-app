// MeGroups.tsx
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { fetchMeGroups } from "@services/group/getMeGroups";
import { debounce } from "@utils/debounce";
import { DataList } from "@components/DataList";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

interface Group {
  admin_id: string;
  city: string;
  created_at: string;
  description: string;
  distance: number;
  id: string;
  title: string;
}

interface GroupsData {
  groups: Group[];
  totalGroups: number;
  totalPages: number;
}

export function MeGroups() {
  const { token } = useSelector((state: RootState) => state.auth);

  const [offset, setOffset] = useState(0);
  const [groupsText, setGroupsText] = useState("");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const debouncedInputChange = useCallback(
    debounce((text: string) => {
      setGroupsText(text);
    }, 500),
    []
  );

  const handleSearchPress = (text: string) => {
    setGroupsText(text);
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

  const { data, isFetching } = useQuery<AxiosResponse<GroupsData>>(
    ["groups", offset, groupsText],
    () => fetchMeGroups({ token, offset, query: groupsText })
  );

  const dataList =
    data?.data?.groups.map((group) => ({
      id: group.id,
      title: group.title,
      local: group.city,
      date: group.created_at,
    })) || [];

  const totalPages = data?.data?.totalPages || 0;

  // TODO: Colocar botao para ir na tela de criar grupo

  return (
    <DataList
      onChangeSearchText={debouncedInputChange}
      onSearchPress={handleSearchPress}
      searchPlaceholder="Pesquise um grupo..."
      cardButtonTitle="Ver mais"
      list={dataList}
      type="group"
      onCardButtonPress={(id) => {
        navigation.navigate("group", { id });
      }}
      activePage={offset + 1}
      totalPages={totalPages}
      isLoading={isFetching}
      emptyButtonPressed={() => {}}
      emptyButtonText="Criar novo grupo!"
      emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
      onBackPage={handleBack}
      onNextPage={handleNext}
      onPagination={handlePagination}
    />
  );
}
