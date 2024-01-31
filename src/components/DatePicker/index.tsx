import React, { useState } from "react";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { formatDate } from "@utils/formatDate";
import { formatTime } from "@utils/formatTime";
import { showError } from "@utils/showError";
import {
  Container,
  ContentContainer,
  StyledCalendar,
  StyledDate,
  StyledDateTimePicker,
  Title,
} from "./styles";
import { StyledClock } from "@screens/Event/styles";
import theme from "@theme/index";

interface DatePickerProps {
  date: string;
  type: "date" | "time";
  onChangeDate: (value: string) => void;
}

const createErrorMessage = (type: string) => {
  return `Falha ao selecionar ${
    type === "date" ? "nova data" : "novo horário"
  }`;
};

export function DatePicker({ date, type, onChangeDate }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDate = type === "date";

  const onDateChange = (value: DateTimePickerEvent) => {
    const { timestamp } = value.nativeEvent;

    setIsOpen(false);

    if (!timestamp) {
      showError(createErrorMessage(type));
    } else {
      const newDate = String(new Date(timestamp).toISOString());

      onChangeDate(newDate);
    }
  };

  return (
    <Container>
      <Title>{isDate ? "Selecione a data" : "Selecione o horário"}</Title>
      <ContentContainer onPress={() => setIsOpen(true)}>
        <StyledDate>{isDate ? formatDate(date) : formatTime(date)}</StyledDate>
        {isDate ? <StyledCalendar /> : <StyledClock />}
      </ContentContainer>
      {isOpen && (
        <StyledDateTimePicker
          value={new Date(date)}
          mode={type}
          display="default"
          onChange={onDateChange}
          textColor={theme.COLORS.PURPLE_300}
          accentColor={theme.COLORS.PURPLE_300}
          is24Hour
        />
      )}
    </Container>
  );
}
