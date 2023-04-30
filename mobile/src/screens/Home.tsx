import { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert, StyleSheet } from "react-native";

import Welcome from "./Welcome";
import { Loading } from "../components/Loading";
import Header from "../components/Header";
import SummaryUser from "../components/Summary";
import Operations from "../components/Operations/";
import Transaction from "../components/Transaction";

import { UserAuth } from "../context/UserAuth";
import { api } from "../lib/axios";

interface TransactionProps {
  title: string;
  value: number;
  created_at: string;
  type: "Income" | "Expense";
}

export default function Home() {
  const { isAuthenticated, isLoading } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function getTransactions() {
      try {
        const response = await api.get("/transaction");

        setTransactions(response.data);

        if (response.data.token) {
          const response = await api.get("/transaction");

          setTransactions(response.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getTransactions();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated) {
    return (
      <View className="flex-1 w-full px-4 pt-[50px] bg-background ">
        <Header />

        <SummaryUser />

        <Operations />

        <View className="mt-10 mb-3 flex-row justify-between">
          <Text className="text-caption leading-caption text-neutral-400 mb-3">
            Ultimas transações
          </Text>

          <Text
            className="text-caption underline text-primary300"
            onPress={() => Alert.alert("Página em construção")}
          >
            Ver todas
          </Text>
        </View>

        <ScrollView
          className="w-full space-y-2 bg-white rounded-lg"
          style={styles.shadow}
        >
          {loading ? (
            <View className="mt-10 bg-red-500 flex-1">
              <Loading background="#FFF" />
            </View>
          ) : transactions.length > 0 ? (
            transactions.map(
              (transaction) =>
                transaction.title &&
                transaction.value && (
                  <Transaction
                    key={transaction.created_at}
                    title={transaction.title}
                    value={transaction.value}
                    createdAt={transaction.created_at}
                    type={transaction.type}
                  />
                )
            )
          ) : (
            <View>
              <Text className="text-center mt-8 text-caption text-neutral-500">
                Você ainda não possuí transações...
              </Text>

              <Text className="text-center mt-4 text-paragraph1 text-neutral-500">
                {"=("}
              </Text>
            </View>
          )}
        </ScrollView>
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
