import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { fetchGroups } from "@services/group/getGroups";
import { useQuery } from "react-query";
import { debounce } from "@utils/debounce";
import { AxiosResponse } from "axios";
import { DataList } from "@components/DataList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { showError } from "@utils/showError";

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
  error?: boolean;
  message?: string;
  type?: string;
}

interface NewGroupsProps {
  focus: boolean;
}

export function NewGroups({ focus }: NewGroupsProps) {
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

  const { data, isFetching, error } = useQuery<AxiosResponse<GroupsData>>(
    ["newGroups", offset, groupsText, focus],
    () => fetchGroups({ token, offset, query: groupsText })
  );

  if (error || data?.data?.error) {
    showError(
      data?.data.message || "Ocorreu um erro, tente novamente mais tarde!"
    );
    navigation.goBack();

    return <></>;
  }

  const dataList =
    data?.data?.groups.map((group) => ({
      id: group.id,
      title: group.title,
      local: group.city,
      date: group.created_at,
    })) || [];

  const totalPages = data?.data?.totalPages || 1;

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
      emptyButtonPressed={() => navigation.navigate("createGroup")}
      emptyButtonText="Criar novo grupo!"
      emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
      onBackPage={handleBack}
      onNextPage={handleNext}
      onPagination={handlePagination}
    />
  );
}
