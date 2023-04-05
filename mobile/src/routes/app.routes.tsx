import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Intro from "../screens/Intro";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export function AppRoutes() {
  const { navigate } = useNavigation();

  useEffect(() => {
    const checkFirstAppOpen = async () => {
      try {
        const isFirstOpen = await AsyncStorage.getItem("isFirstOpen");

        if (isFirstOpen) {
          navigate("home" as never);
        } else {
          navigate("intro" as never);
          await AsyncStorage.setItem("isFirstOpen", "false");
        }
      } catch (error) {
        console.error(
          "Erro ao verificar se o usuário já abriu o aplicativo:",
          error
        );
      }
    };

    checkFirstAppOpen();
  }, []);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="intro" component={Intro} />

      <Screen name="welcome" component={Welcome} />

      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />

      <Screen name="home" component={Home} />
    </Navigator>
  );
}
