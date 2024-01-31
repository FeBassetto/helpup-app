import { DataList } from "@components/DataList";
import { Event, EventType } from "@dtos/event/eventDTO";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { fetchEvents } from "@services/event/getEvents";
import { RootState } from "@store/reducer";
import { debounce } from "@utils/debounce";
import { formatDate } from "@utils/formatDate";
import { showError } from "@utils/showError";
import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

interface EventsData {
  events: Event[];
  totalEvents: number;
  totalPages: number;
  error?: boolean;
  message?: string;
  type?: string;
}

interface NewEventsProps {
  focus: boolean;
  eventType?: EventType;
}

export function NewEvents({ focus, eventType }: NewEventsProps) {
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
    ["newEvents", offset, eventsText, focus],
    () => fetchEvents({ token, offset, query: eventsText, eventType })
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
      eventType: event.type,
      distance: event.distance,
    })) || [];

  const totalPages = data?.data?.totalPages || 1;

  return (
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
      emptyButtonPressed={() => navigation.navigate("createEvent")}
      emptyButtonText="Criar novo evento!"
      emptyMessage="Não encontramos nenhum evento por aqui. Aproveita e crie o seu!"
      onBackPage={handleBack}
      onNextPage={handleNext}
      onPagination={handlePagination}
    />
  );
}
