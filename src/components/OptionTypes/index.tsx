import React from "react";
import theme from "@theme/index";
import {
  Container,
  Title,
  OptionContainer,
  Option,
  OptionText,
} from "./styles";
import {
  EventTypeInfo,
  getEventTypeIconsArray,
} from "@utils/getEventTypeIconsArray";
import { EventType } from "@dtos/event/eventDTO";

interface OptionTypesProps {
  activeType: EventType | null;
  selectOption: (type: EventType) => void;
}

export function OptionTypes({ activeType, selectOption }: OptionTypesProps) {
  const eventTypes = getEventTypeIconsArray();

  const column1 = eventTypes.slice(0, 2);
  const column2 = eventTypes.slice(2, 4);

  const renderColumn = (events: EventTypeInfo[]) => (
    <OptionContainer>
      {events.map((event) => {
        const Icon = event.icon;
        const isActive = event.eventType === activeType;

        return (
          <Option
            key={event.title}
            onPress={() => selectOption(event.eventType)}
            isActive={isActive}
          >
            <Icon
              weight="bold"
              color={isActive ? theme.COLORS.WHITE : theme.COLORS.PURPLE_300}
              size={32}
            />
            <OptionText isActive={isActive}>{event.title}</OptionText>
          </Option>
        );
      })}
    </OptionContainer>
  );

  return (
    <Container>
      <Title>Escolha a comunidade de seu evento</Title>
      {renderColumn(column1)}
      {renderColumn(column2)}
    </Container>
  );
}
