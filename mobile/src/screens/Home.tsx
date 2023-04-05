import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../lib/axios";
import { Loading } from "../components/Loading";
import Welcome from "./Welcome";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          await refreshToken();
          await getTransactions();
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  async function refreshToken() {
    try {
      const refresh_token = await AsyncStorage.getItem("refresh_token");

      const response = await api.post("/user/refresh-token", { refresh_token });

      if (response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getTransactions() {
    try {
      const token = await AsyncStorage.getItem("token");
      const user_id = await AsyncStorage.getItem("user_id");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          ID: user_id,
        },
      };

      const response = await api.get("/transaction", config);

      if (response.status === 200) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (isLoading) {
    <Loading />;
  } else if (isAuthenticated) {
    return (
      <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
        <Text className="text-[61px] font-bold text-center text-primary300">
          Bem vindo
        </Text>
      </View>
    );
  } else {
    return <Welcome />;
  }
}
