import React from "react";
import { GradientBackground, Loader, StyledButton, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  rounded?: boolean;
  outline?: boolean;
  background: "dark" | "light" | "linear" | "lighter";
  onPress: () => void;
  value: string;
  isLoading?: boolean;
}

export function Button({
  background,
  onPress,
  outline = false,
  rounded = false,
  value,
  isLoading = false,
  ...props
}: ButtonProps) {
  const renderContent = () => {
    const commonProps = { background, rounded, outline };

    const content = isLoading ? (
      <Loader {...commonProps} />
    ) : (
      <Title {...commonProps}>{value}</Title>
    );

    if (background === "linear" && !outline) {
      return (
        <GradientBackground colors={["#4039BA", "#6C63FFd"]} {...commonProps}>
          {content}
        </GradientBackground>
      );
    }

    return content;
  };

  return (
    <StyledButton
      {...props}
      onPress={onPress}
      {...{ background, rounded, outline }}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      {renderContent()}
    </StyledButton>
  );
}
