import { View, Text, StyleSheet } from "react-native";

import MoneyImage from "../assets/money.svg";
import ExpensiveImage from "../assets/expensive.svg";
import IncomeImage from "../assets/income.svg";
import { Summary } from "../context/Summary";
import { Loading } from "./Loading";

export default function SummaryUser() {
  const { summary, loading } = Summary();

  function formatValue(valor: number): string {
    return valor
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      .replace("R$", "");
  }

  const total = summary ? formatValue(summary.total) : "";
  const totalExpense = summary ? formatValue(summary.totalExpense) : "";
  const totalIncome = summary ? formatValue(summary.totalIncome) : "";

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

          {loading ? (
            <Loading color="#FFF" />
          ) : (
            <Text className="text-h4 leading-h4 font-bold text-white">
              R${total}
            </Text>
          )}
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

              <Text className="text-h5 leading-h5 font-bold text-neutral500 self-start">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <Text className="text-paragraph2">R$</Text>
                    {totalExpense}
                  </>
                )}
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

              <Text className="text-h5 leading-h5 font-bold text-neutral500 self-start ">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <Text className="text-paragraph2 mr-0">- R$</Text>
                    {totalIncome}
                  </>
                )}
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
