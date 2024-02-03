import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import theme from "@theme/index";
import {
  CalendarBlank,
  Gear,
  House,
  Users,
  UsersFour,
} from "phosphor-react-native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { Group } from "@screens/Group";
import { EditGroup } from "@screens/EditGroup";
import { Home } from "@screens/Home";
import { CreateGroup } from "@screens/CreateGroup";
import { Events } from "@screens/Events";
import { EventType } from "@dtos/event/eventDTO";
import { NavigatorScreenParams } from "@react-navigation/native";
import { Event } from "@screens/Event";
import { EditEvent } from "@screens/EditEvent";
import { CreateEvent } from "@screens/CreateEvent";
import { Friends } from "@screens/Friends";
import { Friend } from "@screens/Friend";
import { FriendInvitations } from "@screens/FriendInvitations";
import { Config } from "@screens/Config";
import { Header } from "@components/Header";
import { Notifications } from "@screens/Notifications";
import { EditAccount } from "@screens/EditAcount";

export type AppRoutes = {
  home: undefined;
  groups: undefined;
  group: { id: string };
  editGroup: { id: string; title: string; description: string; city: string };
  createGroup: undefined;
  groupsStack: NavigatorScreenParams<StackParamList> | undefined;
  eventsStack: NavigatorScreenParams<StackParamList> | undefined;
  events: { eventType?: EventType };
  event: { id: string };
  editEvent: {
    id: string;
    title: string;
    description: string;
    city: string;
    date: string;
    street: string;
    type: EventType;
    number: number;
  };
  createEvent: undefined;
  friendsStack: NavigatorScreenParams<StackParamList> | undefined;
  friends: undefined;
  friend: { id: string };
  friendInvitations: undefined;
  config: undefined;
  configStack: NavigatorScreenParams<StackParamList> | undefined;
  notifications: undefined;
  editAccount: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

type StackParamList = {
  groups: undefined;
  group: { id: string };
  createGroup: undefined;
  editGroup: { id: string; title: string; description: string; city: string };
  events: { eventType?: EventType };
  eventsStack: undefined;
  event: { id: string };
  editEvent: {
    title: string;
    description: string;
    city: string;
    date: string;
    street: string;
    type: EventType;
    number: number;
  };
  createEvent: undefined;
  friendsStack: undefined;
  friends: undefined;
  friend: { id: string };
  friendInvitations: undefined;
  config: undefined;
  configStack: undefined;
  notifications: undefined;
  editAccount: undefined;
};

export type GroupStackNavigationProp =
  NativeStackNavigationProp<StackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

function GroupStack() {
  return (
    <Navigator>
      <Screen
        name="groups"
        component={Groups}
        options={{ header: () => <Header /> }}
      />
      <Screen
        name="group"
        component={Group}
        options={{ header: () => <Header type="back" /> }}
      />
      <Screen
        name="editGroup"
        component={EditGroup}
        options={{ header: () => <Header type="back" /> }}
      />
      <Screen
        name="createGroup"
        component={CreateGroup}
        options={{ header: () => <Header type="back" /> }}
      />
    </Navigator>
  );
}

function EventStack() {
  return (
    <Navigator>
      <Screen
        name="events"
        component={Events}
        options={{ header: () => <Header /> }}
      />
      <Screen
        name="event"
        component={Event}
        options={{ header: () => <Header type="back" /> }}
      />
      <Screen
        name="editEvent"
        component={EditEvent}
        options={{ header: () => <Header type="back" /> }}
      />
      <Screen
        name="createEvent"
        component={CreateEvent}
        options={{ header: () => <Header type="back" /> }}
      />
    </Navigator>
  );
}

function FriendsStack() {
  return (
    <Navigator>
      <Screen
        name="friends"
        component={Friends}
        options={{ header: () => <Header /> }}
      />
      <Screen
        name="friend"
        component={Friend}
        options={{ header: () => <Header type="back" /> }}
      />
      <Screen
        name="friendInvitations"
        component={FriendInvitations}
        options={{ header: () => <Header type="back" /> }}
      />
    </Navigator>
  );
}

function ConfigStack() {
  return (
    <Navigator>
      <Screen
        name="config"
        component={Config}
        options={{ header: () => <Header /> }}
      />
      <Screen
        name="notifications"
        component={Notifications}
        options={{ header: () => <Header type="back" isNotifications /> }}
      />
      <Screen
        name="editAccount"
        component={EditAccount}
        options={{ header: () => <Header type="back" /> }}
      />
    </Navigator>
  );
}

const { Navigator: TabNavigator, Screen: TabScreen } =
  createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <>
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
            fontSize: 14,
          },
        }}
      >
        <TabScreen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <House weight="fill" size={25} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <TabScreen
          name="groupsStack"
          component={GroupStack}
          options={{
            tabBarIcon: ({ color }) => (
              <UsersFour weight="fill" size={25} color={color} />
            ),
            tabBarLabel: "Grupos",
          }}
        />
        <TabScreen
          name="eventsStack"
          component={EventStack}
          options={{
            tabBarIcon: ({ color }) => (
              <CalendarBlank weight="fill" size={25} color={color} />
            ),
            tabBarLabel: "Eventos",
          }}
        />
        <TabScreen
          name="friendsStack"
          component={FriendsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Users weight="fill" size={25} color={color} />
            ),
            tabBarLabel: "Amigos",
          }}
        />
        <TabScreen
          name="configStack"
          component={ConfigStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Gear weight="fill" size={25} color={color} />
            ),
            tabBarLabel: "Config",
          }}
        />
      </TabNavigator>
    </>
  );
}
