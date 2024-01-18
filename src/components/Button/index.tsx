import React from "react";
import { GradientBackground, Loader, StyledButton, Title } from "./styles";

interface ButtonProps {
  rounded?: boolean;
  outline?: boolean;
  background: "dark" | "light" | "linear";
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
        <GradientBackground colors={[""]} {...commonProps}>
          {content}
        </GradientBackground>
      );
    }

    return content;
  };

  return (
    <StyledButton
      onPress={onPress}
      {...{ background, rounded, outline }}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      {renderContent()}
    </StyledButton>
  );
}
