import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import IncomeImage from "../assets/incomebutton.svg";
import ExpenseImage from "../assets/expensebutton.svg";
import GraphImage from "../assets/graphbutton.svg";

export default function Operations() {
  return (
    <View className="mt-10 mb-3 ">
      <Text className="text-caption leading-caption text-neutral-400 mb-3">
        Cálculo das transações
      </Text>

      <View className="w-full flex-row justify-between">
        <View className="flex-1 max-w-[100px] justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
            style={styles.shadow}
          >
            <IncomeImage />
          </TouchableOpacity>
          <Text className="text-caption text-center mt-3">Entrada</Text>
        </View>

        <View className="flex-1 max-w-[100px] justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
            style={styles.shadow}
          >
            <ExpenseImage />
          </TouchableOpacity>
          <Text className="text-caption text-center mt-3">Saída</Text>
        </View>

        <View className="flex-1 max-w-[100px] justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
            style={styles.shadow}
          >
            <GraphImage />
          </TouchableOpacity>
          <Text className="text-caption text-center mt-3">Gráficos</Text>
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
