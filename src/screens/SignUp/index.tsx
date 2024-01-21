import { Container, ChildContentContainer, ContentContainer } from "./styles";
import { Steps } from "@components/Steps";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { ThirdPage } from "./components/ThirdPage";

export function SignUp() {
  const { actualStep, steps, lastStep } = useSelector(
    ({ signUp }: RootState) => signUp
  );

  const translates = [
    useSharedValue(actualStep === 1 ? 0 : -500),
    useSharedValue(actualStep === 2 ? 0 : 500),
    useSharedValue(actualStep === 3 ? 0 : 500),
  ];

  const animatedStyles = translates.map((translate) =>
    useAnimatedStyle(() => ({
      left: translate.value,
    }))
  );

  const updateAnimations = () => {
    translates.forEach((translate, index) => {
      translate.value = withTiming(
        actualStep === index + 1 ? 0 : actualStep > index + 1 ? -500 : 500,
        { duration: 500 }
      );
    });
  };

  useEffect(() => {
    updateAnimations();
  }, [actualStep]);

  const pages = [<FirstPage />, <SecondPage />, <ThirdPage />];

  return (
    <Container>
      <Steps steps={steps} activeStep={actualStep} lastStep={lastStep} />
      <ContentContainer>
        {pages.map((PageComponent, index) => (
          <ChildContentContainer key={index} style={animatedStyles[index]}>
            {PageComponent}
          </ChildContentContainer>
        ))}
      </ContentContainer>
    </Container>
  );
}
