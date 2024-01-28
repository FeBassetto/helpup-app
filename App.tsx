import "@libs/reactotron/config";
import { StatusBar, Text } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import theme from "./src/theme";
import { Provider } from "react-redux";
import { store } from "@store/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { PopUpProvider } from "@contexts/PopUpContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PopUpProvider>
          <QueryClientProvider client={queryClient}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.COLORS.PURPLE_300}
              translucent
            />
            <SafeAreaProvider style={{ backgroundColor: theme.COLORS.WHITE }}>
              <SafeAreaView style={{ flex: 1, position: "relative" }}>
                <Routes />
              </SafeAreaView>
            </SafeAreaProvider>
          </QueryClientProvider>
        </PopUpProvider>
      </Provider>
    </ThemeProvider>
  );
}
