import { Button } from "@components/Button";
import {
  Container,
  LocationContainer,
  LocationIcon,
  PrimaryTitle,
  SecondarySub,
  SecondaryTitle,
} from "./styles";
import { ViewProps } from "react-native";
import { truncateText } from "@utils/truncateText";
import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

interface CardProps extends ViewProps {
  title: string;
  buttonTitle: string;
  icon?: JSX.Element;
  local?: string;
  date?: string;
  onPress: () => void;
  type: "community" | "user" | "event" | "group";
  cardType: "carousel" | "list";
  profileUrl?: string;
  participants?: number;
  index: number;
}

export function Card({
  buttonTitle,
  icon,
  title,
  onPress,
  type,
  profileUrl,
  cardType,
  participants,
  local,
  index,
  style,
  ...props
}: CardProps) {
  const shouldAnimate = cardType === "list";
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    opacity.value = withDelay(index * 100, withSpring(1));
    translateY.value = withDelay(index * 100, withSpring(0));
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const containerType = cardType === "carousel" ? "primary" : "secondary";

  return (
    <Container
      type={containerType}
      {...props}
      style={[shouldAnimate ? animatedStyle : {}, style]}
    >
      {type === "community" && (
        <>
          {icon}
          <PrimaryTitle>{title}</PrimaryTitle>
        </>
      )}
      {type === "group" && (
        <>
          <SecondaryTitle>{truncateText(title, 25)}</SecondaryTitle>
          <LocationContainer>
            <LocationIcon />
            <SecondarySub>{local}</SecondarySub>
          </LocationContainer>
        </>
      )}
      <Button
        background={containerType === "primary" ? "light" : "lighter"}
        value={buttonTitle}
        onPress={onPress}
        rounded
      />
    </Container>
  );
}
