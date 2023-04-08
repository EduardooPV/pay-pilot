import { View, Text, StyleSheet } from "react-native";

import MoneyImage from "../assets/money.svg";
import ExpensiveImage from "../assets/expensive.svg";
import IncomeImage from "../assets/income.svg";

export default function Summary() {
  return (
    <View>
      <Text className="text-caption leading-caption text-neutral-400 mb-3">
        Cálculo das transações
      </Text>
      <View className="gap-y-[10px]">
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

        <View className="w-full flex-row">
          <View className="flex-1 mr-[10px]">
            <View
              className="justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
              style={styles.shadow}
            >
              <View className="w-full flex-row items-center justify-between mb-[10px]">
                <Text className="text-paragraph2 leading-paragraph2 text-neutral-600">
                  Entradas
                </Text>
                <IncomeImage width={22} height={22} />
              </View>

              <Text className="text-h4 leading-h4 font-bold text-neutral500 self-start">
                <Text className="text-paragraph2">R$</Text> 2.000,00
              </Text>
            </View>
          </View>

          <View className="flex-1">
            <View
              className="justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
              style={styles.shadow}
            >
              <View className="w-full flex-row items-center justify-between mb-[10px]">
                <Text className="text-paragraph2 leading-paragraph2 text-neutral-600">
                  Saídas
                </Text>
                <ExpensiveImage width={22} height={22} />
              </View>

              <Text className="text-h4 leading-h4 font-bold text-neutral500 self-start">
                <Text className="text-paragraph2">- R$</Text> 453,98
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: "#0f0f0f61",
  },
});
