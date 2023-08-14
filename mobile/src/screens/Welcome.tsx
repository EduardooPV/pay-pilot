import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/Button";

import WelcomeImage from "../assets/welcome.svg";

export default function Intro() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
      <View className="w-full items-center z-10">
        <Text className="text-[61px] font-bold text-center text-white">
          Bem vindo
        </Text>
        <Text className="text-[16px] text-center text-white">
          Faça login ou cadastre-se para continuar
        </Text>
      </View>

      <Image
        source={require("../assets/bg-welcome.jpg")}
        className="w-screen h-[500px] absolute top-0 left-0"
      />

      <WelcomeImage className="w-full" />

      <View className="w-full gap-y-[10px]">
        <Button onPress={() => navigate("signin" as never)}>Entrar</Button>
        <Button onPress={() => navigate("signup" as never)}>Cadastrar</Button>
      </View>
    </View>
  );
}
