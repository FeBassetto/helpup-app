import "@libs/reactotron/config";
import { StatusBar, Text } from "react-native";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Baloo2_800ExtraBold } from "@expo-google-fonts/baloo-2";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import theme from "./src/theme";
import { Provider } from "react-redux";
import { store } from "@store/index";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_800ExtraBold,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.COLORS.PURPLE_300}
            translucent
          />
          <SafeAreaProvider style={{ backgroundColor: theme.COLORS.WHITE }}>
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </SafeAreaProvider>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}
