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
import { Dimensions, Text } from "react-native";

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

export function Slider() {
  const [showFirstOption, setShowFirstOption] = useState(true);

  return (
    <Container>
      <TopBar>
        <TopOption onPress={() => setShowFirstOption(true)}>
          <OptionText isActive={showFirstOption}>Novos grupos</OptionText>
        </TopOption>
        <TopOption onPress={() => setShowFirstOption(false)}>
          <OptionText isActive={!showFirstOption}>Meus grupos</OptionText>
        </TopOption>
        <TopBorder style={borderAnimation(showFirstOption)} />
      </TopBar>
      <ContentContainer>
        <ChildContainer
          style={childAnimation(showFirstOption ? 0 : -screenWidth)}
        >
          <Text>Testando 1</Text>
        </ChildContainer>
        <ChildContainer
          style={childAnimation(showFirstOption ? screenWidth : 0)}
        >
          <Text>Testando 2</Text>
        </ChildContainer>
      </ContentContainer>
    </Container>
  );
}
