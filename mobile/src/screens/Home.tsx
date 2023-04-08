import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import Welcome from "./Welcome";

import { Loading } from "../components/Loading";
import { UserTransactions } from "../context/GetTransactionsUser";
import { UserAuth } from "../context/UserAuth";

import SettingsImage from "../assets/settings.svg";
import Summary from "../components/Summary";

export default function Home() {
  const { isAuthenticated, isLoading } = UserAuth();
  const { data, isFetching } = UserTransactions();

  console.log(data, isFetching);

  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated) {
    return (
      <View className="flex-1 w-full px-4 pt-[50] bg-background gap-y-7 relative">
        <View className="flex flex-row items-center justify-between mb-6">
          <View className="flex flex-row gap-x-3">
            <View className="w-[50] h-[50] border-primary300 rounded-full border-2 overflow-hidden">
              <Image
                source={require("../assets/person.png")}
                className="w-full h-full"
              />
            </View>
            <View>
              <Text className="text-paragraph2 leading-paragraph2 text-primary300">
                Olá, <Text className="font-bold">Gabriel de Almeira</Text>
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

        <Summary />
      </View>
    );
  } else {
    return <Welcome />;
  }
}
