import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/Button";

import WelcomeImage from "../assets/welcome.svg";

export default function Intro() {
  const { navigate } = useNavigation();

  var width = Dimensions.get("window").width;

  return (
    <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
      <View className="w-full items-center z-10">
        <Text className="text-display2 leading-display2 font-bold text-center text-white">
          Bem vindo
        </Text>
        <Text className="text-paragraph2 leading-paragraph2 text-center text-white">
          Faça login ou cadastre-se para continuar
        </Text>
      </View>

      <Image
        source={require("../assets/bg-welcome.jpg")}
        className="w-screen h-[500px] absolute top-0 left-0"
      />

      <WelcomeImage className="w-full" />

      <View className="w-full gap-y-[10px]">
        <Button>Entrar</Button>
        <Button>Cadastre-se</Button>
      </View>
    </View>
  );
}
