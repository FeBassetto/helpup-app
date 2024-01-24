import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { House } from "phosphor-react-native";

type AppRoutes = {
  home: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.COLORS.WHITE,
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarStyle: {
          backgroundColor: theme.COLORS.PURPLE_300,
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONT_FAMILY.MONTSERRAT.BOLD,
          fontSize: 13,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House weight="fill" size={32} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
    </Navigator>
  );
}
