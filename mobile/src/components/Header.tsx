import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

import SettingsImage from "../assets/settings.svg";
import { UserAuth } from "../context/FireBaseAuth";

export default function Header() {
  const { user } = UserAuth();

  return (
    <View className="flex flex-row items-center justify-between mb-10">
      <View
        className="flex flex-row gap-x-3 items-center
      "
      >
        <View className="w-[50] h-[50] border-primary300 rounded-full border-2 overflow-hidden">
          <Image
            source={require("../assets/person.png")}
            className="w-full h-full"
          />
        </View>
        <View>
          <Text className="text-paragraph2 leading-paragraph2 text-primary300">
            Olá,{" "}
            <Text className="font-bold">
              {user?.email ? user?.email : "novamente!"}
            </Text>
          </Text>
          <Text className="text-caption leading-caption text-primary300">
            Seja bem vindo!
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert("Funcionalidade sendo construida.")}
      >
        <SettingsImage />
      </TouchableOpacity>
    </View>
  );
}
