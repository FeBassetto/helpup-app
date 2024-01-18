import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import Toast from "react-native-toast-message";
import { TopMessage } from "@components/TopMessage";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
      <Toast
        config={{
          info: ({ text1 }) => <TopMessage title={String(text1)} />,
        }}
      />
    </NavigationContainer>
  );
}
