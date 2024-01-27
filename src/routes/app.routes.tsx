import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { EditGroup } from "@screens/EditGroup";
import { Group } from "@screens/Group";
import { Groups } from "@screens/Groups";
import { Home } from "@screens/Home";
import theme from "@theme/index";
import { House, UsersFour } from "phosphor-react-native";

type AppRoutes = {
  home: undefined;
  groups: undefined;
  group: { id: string };
  editGroup: { id: string; title: string; description: string; city: string };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

// TODO juntar bottomtabs com nativeStack

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
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
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
      <Screen
        name="groups"
        component={Groups}
        options={{
          tabBarIcon: ({ color }) => (
            <UsersFour weight="fill" size={32} color={color} />
          ),
          tabBarLabel: "Grupos",
        }}
      />
      <Screen
        name="group"
        component={Group}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="editGroup"
        component={EditGroup}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
