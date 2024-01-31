import { Search } from "@components/Search";
import {
  Container,
  FullContainer,
  StyledImage,
  StyledList,
  StyledText,
} from "./styles";
import { ViewProps } from "react-native";
import { Card } from "@components/Card";
import { Pagination } from "./components/Pagination";
import { Logo } from "@components/Logo";
import { Loader } from "@components/Loader";

import SmileImage from "@assets/imgs/smile.png";
import { Button } from "@components/Button";
import { useState } from "react";
import { EventType } from "@dtos/event/eventDTO";

export interface CardProps {
  id: string;
  title: string;
  icon?: JSX.Element;
  local?: string;
  date?: string;
  profileUrl?: string;
  participants?: number;
  eventType?: EventType;
  distance?: number;
}

interface DataListProps extends ViewProps {
  searchPlaceholder: string;
  onChangeSearchText: (value: string) => void;
  onSearchPress: (text: string) => void;
  list: CardProps[];
  cardButtonTitle: string;
  onCardButtonPress: (id: string) => void;
  activePage: number;
  totalPages: number;
  isLoading: boolean;
  emptyMessage: string;
  emptyButtonText: string;
  emptyButtonPressed: () => void;
  onBackPage: () => void;
  onNextPage: () => void;
  onPagination: (page: number) => void;
  type: "community" | "user" | "event" | "group";
}

export function DataList({
  onChangeSearchText,
  onSearchPress,
  searchPlaceholder,
  list,
  type,
  cardButtonTitle,
  onCardButtonPress,
  activePage,
  totalPages,
  isLoading,
  emptyMessage,
  emptyButtonText,
  emptyButtonPressed,
  onBackPage,
  onNextPage,
  onPagination,
  ...props
}: DataListProps) {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (text: string) => {
    onChangeSearchText(text);
    setSearchText(text);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <FullContainer>
          <Logo type="primary" />
          <Loader type="dark" />
        </FullContainer>
      );
    }

    if (list.length === 0) {
      return (
        <FullContainer>
          <Logo type="primary" />
          <StyledImage source={SmileImage} />
          <StyledText>{emptyMessage}</StyledText>
          <Button
            background="dark"
            onPress={emptyButtonPressed}
            value={emptyButtonText}
            style={{ width: 300 }}
          />
        </FullContainer>
      );
    } else {
      return (
        <StyledList
          data={list}
          renderItem={({ item, index }) => (
            <Card
              eventType={item.eventType}
              buttonTitle={cardButtonTitle}
              onPress={() => onCardButtonPress(item.id)}
              title={item.title}
              type={type}
              profileUrl={item.profileUrl}
              date={item.date}
              cardType="list"
              participants={item.participants}
              distance={item.distance}
              local={item.local}
              style={{
                marginRight: index % 2 === 0 ? 10 : 0,
                marginLeft: index % 2 !== 0 ? 10 : 0,
                marginBottom: 20,
              }}
              index={index}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          havePagination={totalPages > 1}
          ListFooterComponent={
            <Pagination
              activePage={activePage}
              totalPages={totalPages}
              onBackPage={onBackPage}
              onNextPage={onNextPage}
              onPagination={onPagination}
            />
          }
        />
      );
    }
  };

  return (
    <Container {...props}>
      <Search
        placeholder={searchPlaceholder}
        onChangeText={handleTextChange}
        onSearchPress={() => onSearchPress(searchText)}
      />
      {renderContent()}
    </Container>
  );
}
