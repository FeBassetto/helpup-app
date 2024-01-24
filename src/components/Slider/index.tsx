import React, { useState } from "react";
import {
  Container,
  OptionText,
  TopBar,
  TopOption,
  TopBorder,
  ChildContainer,
  ContentContainer,
} from "./styles";
import { useAnimatedStyle, withSpring } from "react-native-reanimated";
import { Dimensions, Text, ViewProps } from "react-native";

const screenWidth = Dimensions.get("window").width;
const FIRST_OPTION_POSITION = 0;
const SECOND_OPTION_POSITION = 0.5;

const borderAnimation = (showFirstOption: boolean) =>
  useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(
          showFirstOption
            ? FIRST_OPTION_POSITION
            : SECOND_OPTION_POSITION * (screenWidth - 40),
          {
            damping: 10,
            stiffness: 50,
          }
        ),
      },
    ],
  }));

const childAnimation = (translateX: number) =>
  useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX, {
          damping: 10,
          stiffness: 50,
        }),
      },
    ],
  }));

interface SliderProps extends ViewProps {
  firstTitle: string;
  secondTitle: string;
  firstContent: JSX.Element;
  secondContent: JSX.Element;
}

export function Slider({
  firstContent,
  firstTitle,
  secondContent,
  secondTitle,
  ...props
}: SliderProps) {
  const [showFirstOption, setShowFirstOption] = useState(true);

  return (
    <Container {...props}>
      <TopBar>
        <TopOption onPress={() => setShowFirstOption(true)}>
          <OptionText isActive={showFirstOption}>{firstTitle}</OptionText>
        </TopOption>
        <TopOption onPress={() => setShowFirstOption(false)}>
          <OptionText isActive={!showFirstOption}>{secondTitle}</OptionText>
        </TopOption>
        <TopBorder style={borderAnimation(showFirstOption)} />
      </TopBar>
      <ContentContainer>
        <ChildContainer
          style={childAnimation(showFirstOption ? 0 : -screenWidth)}
        >
          {firstContent}
        </ChildContainer>
        <ChildContainer
          style={childAnimation(showFirstOption ? screenWidth : 0)}
        >
          {secondContent}
        </ChildContainer>
      </ContentContainer>
    </Container>
  );
}
