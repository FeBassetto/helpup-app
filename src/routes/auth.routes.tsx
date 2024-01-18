import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { PreSignUp } from "@screens/PreSignUp";
import { SignIn } from "@screens/SignIn";

type AuthRoutes = {
  signIn: undefined;
  preSignUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="preSignUp" component={PreSignUp} />
    </Navigator>
  );
}
