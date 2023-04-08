import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Loading } from "../components/Loading";
import Welcome from "./Welcome";

import SettingsImage from "../assets/settings.svg";
import MoneyImage from "../assets/money.svg";
import { UserAuth } from "../context/UserAuth";

export default function Home() {
  const { isAuthenticated, isLoading } = UserAuth();

  // FAZER UM CONTEXTO

  // async function getTransactions() {
  //   try {
  //     const response = await api.get("/transaction");

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getTransactions();

  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated) {
    return (
      <View className="flex-1 w-full px-4 pt-[50] bg-background gap-y-7 relative">
        <View className="flex flex-row items-center justify-between">
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

        <View>
          <Text className="text-caption leading-caption text-neutral-400 mb-3">
            Cálculo das transações
          </Text>
          <View>
            <View className="justify-center items-center bg-primary300 p-5 rounded-lg">
              <View className="flex-row items-center gap-x-4 mb-3">
                <Text className="text-paragraph2 leading-paragraph2 text-white">
                  Saldo disponível
                </Text>
                <MoneyImage />
              </View>

              <Text className="text-h4 leading-h4 font-bold text-white">
                R$ 1.546,02
              </Text>
            </View>

            <View>
              <View
                className="justify-center items-center p-2 space-y-2 bg-white rounded-lg"
                style={styles.shadow}
              >
                <View className="flex-row items-center gap-x-4 mb-3">
                  <Text className="text-paragraph2 leading-paragraph2 text-white">
                    Saldo disponível
                  </Text>
                  <MoneyImage />
                </View>

                <Text className="text-h4 leading-h4 font-bold text-white">
                  R$ 1.546,02
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return <Welcome />;
  }
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: "#0f0f0f61",
  },
});
