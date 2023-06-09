import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import GraphImage from "../../assets/graphbutton.svg";
import Income from "./Income";
import Expense from "./Expense";

export default function Operations() {
  return (
    <View className="mt-10 mb-3 ">
      <Text className="text-caption leading-caption text-neutral-400 mb-3">
        Cálculo das transações
      </Text>

      <View className="w-full flex-row justify-between">
        <Income />

        <Expense />

        <View className="flex-1 max-w-[100px] justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
            style={styles.shadow}
          >
            <GraphImage color="#4977FF" width={35} height={35} />
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
