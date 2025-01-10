import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabIcon = () => (
  <View>
    <View>
      <Image />
    </View>
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: "white",
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: () => <TabIcon />,
      }}
    />
  </Tabs>
);

export default Layout;
