import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { ToastProvider } from "react-native-toast-notifications";
import { UserAuthProvider } from "./src/context/UserAuth";

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
    return <Loading />;
  }

  return (
    <UserAuthProvider>
      <ToastProvider offsetTop={70}>
        <Routes />
        <StatusBar backgroundColor="transparent" translucent />
      </ToastProvider>
    </UserAuthProvider>
  );
}
