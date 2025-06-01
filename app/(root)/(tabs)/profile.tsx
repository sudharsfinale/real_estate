import icons from "@/constants/icons";
import images from "@/constants/images";
import { logout } from "@/library/appwrite";
import { useGlobalContext } from "@/library/global-provider";
import React from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Divider = () => {
  return <View className="h-0.5 bg-primary-100 w-full mt-4"></View>;
};

const SettingsItem = ({
  icon,
  title,
  onPress,
  showRightIcon = true,
}: {
  icon: any;
  title: string;
  showRightIcon?: boolean;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-row justify-between items-center mt-4">
      <View className="flex flex-row items-center gap-2">
        <Image className="size-6" resizeMode="contain" source={icon} />
        <Text
          className={`font-rubik ${
            showRightIcon ? "text-black-300" : "text-danger"
          } text-lg`}
        >
          {title}
        </Text>
      </View>
      {showRightIcon && (
        <Image
          className="size-5"
          resizeMode="contain"
          source={icons.rightArrow}
        />
      )}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();
  const handleLogout = async() => {
    const result = await logout();
    if(result){
      Alert.alert("Success", "You have been logged out successfully")
    }
  }
  console.log(JSON.stringify(user, null, 2));
  console.log(typeof(user))
  return (
    <ScrollView contentContainerClassName="p-[16]">
      <View className="flex flex-row justify-between">
        <Text className="font-rubik-semibold text-xl">Profile</Text>
        <Image source={icons.bell} className="size-6" />
      </View>
      <View className="items-center">
        <View className="justify-center items-center my-6 w-[150] h-[150]">
          {user && user?.avatar && typeof user?.avatar === "string" ? (
            <Image
              source={{ uri: user?.avatar }}
              className="h-full w-full rounded-[75] object-cover"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={images.avatar}
              className="h-full w-full rounded-[75] object-cover"
              resizeMode="contain"
            />
          )}
          <TouchableOpacity className="bg-white absolute bottom-4 right-4 w-[19] h-[19] rounded-[10] flex items-center justify-center">
            <Image source={icons.edit} className="size-6" />
          </TouchableOpacity>
        </View>
        <Text className="font-rubik-bold text-3xl">{user?.name}</Text>
      </View>
      <Divider />
      <SettingsItem icon={icons.calendar} title="My Booking" />
      <SettingsItem icon={icons.wallet} title="Payments" />
      <Divider />
      <SettingsItem icon={icons.person} title="Profile" />
      <SettingsItem icon={icons.bell} title="Notification" />
      <SettingsItem icon={icons.shield} title="Security" />
      <SettingsItem icon={icons.language} title="Language" />
      <SettingsItem icon={icons.info} title="Help Center" />
      <SettingsItem icon={icons.people} title="Invite Friends" />
      <Divider />
      <SettingsItem icon={icons.logout} title="Logout" showRightIcon={false} />
    </ScrollView>
  );
};

export default Profile;
