import { MagnifyingGlass } from "phosphor-react-native";
import { Container, SearchButton, StyledInput } from "./styles";
import { ViewProps } from "react-native";

interface SearchProps extends ViewProps {
  placeholder: string;
  onChangeText: (value: string) => void;
  onSearchPress: () => void;
}

export function Search({
  placeholder,
  onChangeText,
  onSearchPress,
  ...props
}: SearchProps) {
  return (
    <Container {...props}>
      <StyledInput placeholder={placeholder} onChangeText={onChangeText} />
      <SearchButton onPress={onSearchPress}>
        <MagnifyingGlass weight="bold" size={30} color="#fff" />
      </SearchButton>
    </Container>
  );
}
