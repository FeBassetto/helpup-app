import { DataList } from "@components/DataList";
import { CenterContainer } from "../styles";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { debounce } from "@utils/debounce";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { fetchMeEvents } from "@services/event/getMeEvents";
import { showError } from "@utils/showError";
import { Button } from "@components/Button";
import { formatDate } from "@utils/formatDate";
import { Event } from "@dtos/event/eventDTO";

interface EventsData {
  events: Event[];
  totalEvents: number;
  totalPages: number;
  error?: boolean;
  message?: string;
  type?: string;
}

interface MeEventsProps {
  focus: boolean;
}

export function MeEvents({ focus }: MeEventsProps) {
  const { token } = useSelector((state: RootState) => state.auth);

  const [offset, setOffset] = useState(0);
  const [eventsText, setEventsText] = useState("");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const debouncedInputChange = useCallback(
    debounce((text: string) => {
      setEventsText(text);
    }, 500),
    []
  );

  const handleSearchPress = (text: string) => {
    setEventsText(text);
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

  const { data, isFetching, error } = useQuery<AxiosResponse<EventsData>>(
    ["meEvents", offset, eventsText, focus],
    () => fetchMeEvents({ token, offset, query: eventsText })
  );

  if (error || data?.data?.error) {
    showError(
      data?.data.message || "Ocorreu um erro, tente novamente mais tarde!"
    );

    navigation.goBack();

    return <></>;
  }

  const dataList =
    data?.data?.events.map((event) => ({
      id: event.id,
      title: event.title,
      local: event.city,
      date: formatDate(event.date),
    })) || [];

  const totalPages = data?.data?.totalPages || 1;

  return (
    <CenterContainer>
      <DataList
        onChangeSearchText={debouncedInputChange}
        onSearchPress={handleSearchPress}
        searchPlaceholder="Pesquise um evento..."
        cardButtonTitle="Ver mais"
        list={dataList}
        type="event"
        onCardButtonPress={(id) => {
          navigation.navigate("event", { id });
        }}
        activePage={offset + 1}
        totalPages={totalPages}
        isLoading={isFetching}
        emptyButtonPressed={() => navigation.navigate("createGroup")} // TODO: Trocar para event
        emptyButtonText="Criar novo evento!"
        emptyMessage="Não encontramos nenhum evento por aqui. Aproveita e crie o seu!"
        onBackPage={handleBack}
        onNextPage={handleNext}
        onPagination={handlePagination}
      />
      <Button
        background="light"
        onPress={() => navigation.navigate("createGroup")}
        value={"Criar Evento"}
        style={{ marginBottom: 10, marginTop: 2 }}
      />
    </CenterContainer>
  );
}
