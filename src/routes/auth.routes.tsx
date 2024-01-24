import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";
import { MailForgotPassword } from "@screens/MailForgotPassword";
import { PreSignUp } from "@screens/PreSignUp";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type AuthRoutes = {
  signIn: undefined;
  preSignUp: undefined;
  signUp: undefined;
  forgotPassword: undefined;
  mailForgotPassword: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="preSignUp" component={PreSignUp} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
      <Screen name="mailForgotPassword" component={MailForgotPassword} />
    </Navigator>
  );
}
