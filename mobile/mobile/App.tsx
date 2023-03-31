import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

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
    <>
      <Routes />
      <StatusBar backgroundColor="transparent" translucent />
    </>
  );
}
