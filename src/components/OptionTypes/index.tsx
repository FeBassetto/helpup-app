import React from "react";
import {
  Container,
  Option,
  OptionContainer,
  OptionText,
  Title,
} from "./styles";
import theme from "@theme/index";
import {
  EventTypeInfo,
  getEventTypeIconsArray,
} from "@utils/getEventTypeIconsArray";
import { EventType } from "@dtos/event/eventDTO";

interface OptionTypesProps {
  activeType?: EventType;
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
        return (
          <Option
            key={event.title}
            onPress={() => selectOption(event.eventType)}
            isActive={event.eventType === activeType}
          >
            <Icon
              weight="bold"
              color={
                event.eventType === activeType
                  ? theme.COLORS.WHITE
                  : theme.COLORS.PURPLE_300
              }
              size={32}
            />
            <OptionText isActive={event.eventType === activeType}>
              {event.title}
            </OptionText>
          </Option>
        );
      })}
    </OptionContainer>
  );

  return (
    <Container>
      <Title>Escolha qual o foco do seu evento</Title>
      {renderColumn(column1)}
      {renderColumn(column2)}
    </Container>
  );
}
