import { useEffect, useRef, useState } from "react";
import {
  Container,
  IconShowPassword,
  IconHidePassword,
  Placeholder,
  PlaceholderButton,
  PlaceholderContainer,
  StyledInput,
  TouchableIcon,
} from "./styles";
import { TextInput, TextInputProps } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface InputProps extends TextInputProps {
  placeholder: string;
  onTextChange: (value: string) => void;
  isPassword?: boolean;
  hasText?: boolean;
}

export function Input({
  placeholder,
  onTextChange,
  isPassword = false,
  hasText = false,
  editable = true,
  ...props
}: InputProps) {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean | null>(null);

  const isFocus = useSharedValue(hasText);

  const inputRef = useRef<TextInput>(null);

  const handleOnPlaceholderPress = () => {
    if (!isFocus.value && editable) {
      setIsInputFocused(true);
      isFocus.value = true;
      inputRef.current?.focus();
    }
  };

  const handleOnInputBlur = () => {
    if (!text && !hasText) {
      setIsInputFocused(false);
      isFocus.value = false;
    }
  };

  const handleInputChange = (value: string) => {
    setText(value);
    onTextChange(value);
  };

  const placeholderButtonStyle = useAnimatedStyle(() => {
    return {
      bottom: withSpring(isFocus.value ? 30 : 0),
    };
  });

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (hasText) {
      isFocus.value = true;
    }
    if (isInputFocused === null && !hasText) {
      isFocus.value = false;
    }
  }, [hasText]);

  return (
    <Container editable={editable}>
      <PlaceholderContainer
        isPassword={isPassword}
        style={placeholderButtonStyle}
      >
        <PlaceholderButton onPress={handleOnPlaceholderPress}>
          <Placeholder>{placeholder}</Placeholder>
        </PlaceholderButton>
      </PlaceholderContainer>
      <StyledInput
        autoCapitalize="none"
        {...props}
        editable={editable}
        ref={inputRef}
        onBlur={handleOnInputBlur}
        onChangeText={handleInputChange}
        secureTextEntry={!showPassword && isPassword}
        isPassword={isPassword}
      />
      {isPassword && (
        <TouchableIcon onPress={toggleShowPassword}>
          {showPassword ? (
            <IconHidePassword size={32} weight="bold" />
          ) : (
            <IconShowPassword size={32} weight="bold" />
          )}
        </TouchableIcon>
      )}
    </Container>
  );
}
