import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabsLayout = () => {
  const TabIcon = ({
    focused,
    title,
    icon,
  }: {
    focused: boolean;
    title: string;
    icon: any;
  }) => {
    return (
      <View className="flex flex-1 flex-col mt-3 items-center">
        <Image className="size-6" tintColor={focused ? "#0061FF" : "#666876"} resizeMode="contain" source={icon} />
        <Text className={`${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}>{title}</Text>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.home} title="Home" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.search} title="Explore" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.person} title="Profile" />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
