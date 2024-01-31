import { Button } from "@components/Button";
import {
  ClockIcon,
  Container,
  InfoContainer,
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
import { Brain, Ear, Eye, IconProps, Wheelchair } from "phosphor-react-native";
import theme from "@theme/index";
import { EventType } from "@dtos/event/eventDTO";

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
  eventType?: EventType;
  distance?: number;
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
  date,
  eventType,
  distance,
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

  const iconProps: IconProps = {
    weight: "bold",
    size: 20,
    color: theme.COLORS.PURPLE_300,
  };

  const eventTypes = {
    physical: {
      icon: <Wheelchair {...iconProps} />,
      text: "Físico",
    },
    visual: {
      icon: <Eye {...iconProps} />,
      text: "Visual",
    },
    auditory: {
      icon: <Ear {...iconProps} />,
      text: "Auditivo",
    },
    mental: {
      icon: <Brain {...iconProps} />,
      text: "Intelectual",
    },
  };

  const haveDistance = typeof distance === "number";

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
          <InfoContainer>
            <LocationIcon />
            <SecondarySub>{local}</SecondarySub>
          </InfoContainer>
        </>
      )}
      {type === "event" && (
        <>
          <SecondaryTitle>{truncateText(title, 25)}</SecondaryTitle>
          <InfoContainer>
            <LocationIcon />
            <SecondarySub>
              {haveDistance ? `${distance.toFixed(2)} KM` : local}
            </SecondarySub>
          </InfoContainer>
          <InfoContainer>
            <ClockIcon />
            <SecondarySub>{date}</SecondarySub>
          </InfoContainer>
          {eventType && (
            <InfoContainer>
              {eventTypes[eventType].icon}
              <SecondarySub style={{ marginLeft: 5 }}>
                {eventTypes[eventType].text}
              </SecondarySub>
            </InfoContainer>
          )}
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
