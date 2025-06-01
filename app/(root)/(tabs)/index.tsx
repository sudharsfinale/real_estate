import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-semibold text-teal-800 font-rubik text-3xl">Hello World</Text>
      <Link href={"/sign_in"}>Sign In</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Property</Link>
      <Link href={"/properties/1"}>Go to Property 1</Link>
    </View>
  );
}
