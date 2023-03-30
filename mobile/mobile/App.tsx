import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-primary300">
        Open up App.tsx to start working on your app!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}