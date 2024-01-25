import { Header } from "@components/Header";
import { Container, ContentContainer } from "./styles";
import { Slider } from "@components/Slider";
import { DataList } from "@components/DataList";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { fetchGroups } from "@services/group/getGroups";
import { useQuery } from "react-query";
import { useState } from "react";
import { debounce } from "@utils/debounce";
import { useDispatch } from "react-redux";
import { clearAuth } from "@store/actions/authActions";
import { showError } from "@utils/showError";
import { fetchGroup } from "@store/actions/groupActions";

export function Groups() {
  const { groups, totalGroups, totalPages, offset } = useSelector(
    (state: RootState) => state.group
  );
  const { token } = useSelector((state: RootState) => state.auth);

  const [groupsText, setGroupsText] = useState("");

  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(
    ["groups", offset, groupsText],
    () => fetchGroups({ token, offset, query: groupsText }),
    {}
  );

  // if (data?.data) {
  //   const { data: responseData } = data;
  //   dispatch(
  //     fetchGroup({
  //       groups: responseData.groups,
  //       totalGroups: responseData.totalGroups,
  //       totalPages: responseData.totalPages,
  //     })
  //   );
  // }

  const debouncedInputChange = debounce((text: string) => {
    setGroupsText(text);
  }, 500);

  const mock = [] as any;

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Slider
          firstContent={
            <DataList
              onChangeSearchText={debouncedInputChange}
              onSearchPress={() => {}}
              searchPlaceholder="Pesquise um grupo..."
              cardButtonTitle="Ver mais"
              list={mock}
              type="group"
              onCardButtonPress={() => {}}
              activePage={1}
              totalPages={5}
              isLoading={isLoading}
              emptyButtonPressed={() => {}}
              emptyButtonText="Criar novo grupo!"
              emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
            />
          }
          firstTitle="Novos grupos"
          secondContent={
            <DataList
              onChangeSearchText={() => {}}
              onSearchPress={() => {}}
              searchPlaceholder="Pesquise um grupo..."
              cardButtonTitle="Ver mais"
              list={mock}
              type="group"
              onCardButtonPress={() => {}}
              activePage={1}
              totalPages={5}
              isLoading={false}
              emptyButtonPressed={() => {}}
              emptyButtonText="Criar novo grupo!"
              emptyMessage="Não encontramos nenhum grupo por aqui. Aproveita e crie o seu!"
            />
          }
          secondTitle="Meus grupos"
        />
      </ContentContainer>
    </Container>
  );
}
