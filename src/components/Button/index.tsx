import { GradientBackground, StyledButton, Title } from "./styles";

interface ButtonProps {
  rounded?: boolean;
  outline?: boolean;
  background: "dark" | "light" | "linear";
  onPress: () => void;
  value: string;
}

export function Button({
  background,
  onPress,
  outline = false,
  rounded = false,
  value,
}: ButtonProps) {
  return (
    <StyledButton
      onPress={onPress}
      background={background}
      rounded={rounded}
      outline={outline}
      activeOpacity={0.8}
    >
      {background === "linear" && !outline ? (
        <GradientBackground
          colors={[""]}
          background={background}
          rounded={rounded}
          outline={outline}
        >
          <Title background={background} rounded={rounded} outline={outline}>
            {value}
          </Title>
        </GradientBackground>
      ) : (
        <Title background={background} rounded={rounded} outline={outline}>
          {value}
        </Title>
      )}
    </StyledButton>
  );
}
