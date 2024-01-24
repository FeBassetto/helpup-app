import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import Toast from "react-native-toast-message";
import { TopMessage } from "@components/TopMessage";
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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";
import { storageAuthTokenGet } from "@storage/storageAuthToken";
import { useDispatch } from "react-redux";
import { fetchStorageAuth } from "@store/actions/authActions";
import { LoadingScreen } from "@screens/Loading";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const [isTokenLoaded, setIsTokenLoaded] = useState(false);
  const [showLoadingScreen, setShowScreenLoading] = useState(true);

  const { refreshToken, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const animationTime = 1000;

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

  const fetchAuthData = async () => {
    if (!refreshToken && !token) {
      setIsTokenLoaded(false);
      const { refreshToken = "", token = "" } = await storageAuthTokenGet();

      dispatch(fetchStorageAuth({ refreshToken, token }));
      setIsTokenLoaded(true);
    }

    setIsTokenLoaded(true);
  };

  useEffect(() => {}, [fontsLoaded, isTokenLoaded]);

  useEffect(() => {
    fetchAuthData();
  }, []);

  const isLoading = !fontsLoaded || !isTokenLoaded;

  return (
    <NavigationContainer>
      {showLoadingScreen && (
        <LoadingScreen
          closedScreen={() => setShowScreenLoading(false)}
          stopLoading={!isLoading}
          stopTime={animationTime}
        />
      )}
      {!isLoading && (
        <>
          {!!token ? <AppRoutes /> : <AuthRoutes />}
          <Toast
            config={{
              info: ({ text1 }) => <TopMessage title={String(text1)} />,
            }}
          />
        </>
      )}
    </NavigationContainer>
  );
}
