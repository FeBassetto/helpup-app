import { useRef, useState } from "react";
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
  onTextChange?: (value: string) => void;
  isPassword?: boolean;
}

export function Input({
  placeholder,
  onTextChange = () => {},
  isPassword = false,
  ...props
}: InputProps) {
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFocus = useSharedValue(false);

  const inputRef = useRef<TextInput>(null);

  const handleOnPlaceholderPress = () => {
    if (!isFocus.value) {
      isFocus.value = true;
      inputRef.current?.focus();
    }
  };

  const handleOnInputBlur = () => {
    if (!text) {
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

  console.log(showPassword);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Container>
      <PlaceholderContainer
        isPassword={isPassword}
        style={placeholderButtonStyle}
      >
        <PlaceholderButton onPress={handleOnPlaceholderPress}>
          <Placeholder>{placeholder}</Placeholder>
        </PlaceholderButton>
      </PlaceholderContainer>
      <StyledInput
        {...props}
        ref={inputRef}
        onBlur={handleOnInputBlur}
        onChangeText={handleInputChange}
        secureTextEntry={!showPassword && isPassword}
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
