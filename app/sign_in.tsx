import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/library/appwrite";
import { useGlobalContext } from "@/library/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const {refetch, isLoggedIn, loading} = useGlobalContext();

  if(!loading && isLoggedIn) return <Redirect href={"/"}/>

  const handleLogin = async() => {
    const result = await login();
    if(result) {
     refetch();
    } else {
      Alert.alert("Error", "Failed to login")
    }
  };
  return (
    <ScrollView contentContainerClassName="bg-white flex-1 flex-grow" className="">
      <Image
        source={images.onboarding}
        className="w-full h-4/6 object-center"
        resizeMode="cover"
      />
      <View className="px-10">
        <Text className="text-base text-center uppercase font-rubik text-black-200">
          Welcome to YourEstate
        </Text>
        <Text className="mt-2 text-bold font-rubik-bold text-black-300 text-3xl text-center capitalize">
          Let's get closer to{"\n"}
          <Text className="text-primary-300">Your Ideal Home</Text>
        </Text>
        <Text className="text-base text-center capitalize font-rubik text-black-200 mt-12">
          Login to YourState with Google
        </Text>
        <View>

        </View>
        <TouchableOpacity
          className="bg-white shadow-md shadow-zinc-500 rounded-full w-full py-4 mt-5"
          onPress={handleLogin}
        >
          <View className="flex flex-row items-center justify-center gap-2">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-lg text-center capitalize font-rubik-medium text-black-300">
              Continue With Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
