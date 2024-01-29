import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import theme from "@theme/index";
import { House, UsersFour } from "phosphor-react-native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { Group } from "@screens/Group";
import { EditGroup } from "@screens/EditGroup";
import { Home } from "@screens/Home";
import { CreateGroup } from "@screens/CreateGroup";

type AppRoutes = {
  home: undefined;
  groups: undefined;
  group: { id: string };
  editGroup: { id: string; title: string; description: string; city: string };
  createGroup: undefined;
  groupsStack: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

type GroupStackParamList = {
  groups: undefined;
  group: { id: string };
  createGroup: undefined;
  editGroup: { id: string; title: string; description: string; city: string };
};

export type GroupStackNavigationProp =
  NativeStackNavigationProp<GroupStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<GroupStackParamList>();

function GroupStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="group" component={Group} />
      <Screen name="editGroup" component={EditGroup} />
      <Screen name="createGroup" component={CreateGroup} />
    </Navigator>
  );
}

const { Navigator: TabNavigator, Screen: TabScreen } =
  createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <TabNavigator
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
      <TabScreen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House weight="fill" size={32} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <TabScreen
        name="groupsStack"
        component={GroupStack}
        options={{
          tabBarIcon: ({ color }) => (
            <UsersFour weight="fill" size={32} color={color} />
          ),
          tabBarLabel: "Grupos",
        }}
      />
    </TabNavigator>
  );
}
