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

export interface CardProps {
  id: string;
  title: string;
  icon?: JSX.Element;
  local?: string;
  date?: string;
  profileUrl?: string;
  participants?: number;
}

interface DataListProps extends ViewProps {
  searchPlaceholder: string;
  onChangeSearchText: (value: string) => void;
  onSearchPress: () => void;
  list: CardProps[];
  cardButtonTitle: string;
  onCardButtonPress: (id: string) => void;
  activePage: number;
  totalPages: number;
  isLoading: boolean;
  emptyMessage: string;
  emptyButtonText: string;
  emptyButtonPressed: () => void;
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
  ...props
}: DataListProps) {
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
              buttonTitle={cardButtonTitle}
              onPress={() => onCardButtonPress(item.id)}
              title={item.title}
              type={type}
              profileUrl={item.profileUrl}
              cardType="list"
              participants={item.participants}
              style={{
                marginRight: index % 2 === 0 ? 10 : 0,
                marginLeft: index % 2 !== 0 ? 10 : 0,
                marginBottom: 20,
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <Pagination activePage={activePage} totalPages={totalPages} />
          }
        />
      );
    }
  };

  return (
    <Container {...props}>
      <Search
        placeholder={searchPlaceholder}
        onChangeText={onChangeSearchText}
        onSearchPress={onSearchPress}
      />
      {renderContent()}
    </Container>
  );
}
