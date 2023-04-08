import { View } from "react-native";
import Welcome from "./Welcome";

import { Loading } from "../components/Loading";
import SummaryUser from "../components/Summary";
import Header from "../components/Header";

import { UserAuth } from "../context/UserAuth";

export default function Home() {
  const { isAuthenticated, isLoading } = UserAuth();

  if (isLoading) {
    return <Loading />;
  } else if (isAuthenticated) {
    return (
      <View className="flex-1 w-full px-4 pt-[50px] bg-background ">
        <Header />

        <SummaryUser />
      </View>
    );
  } else {
    return <Welcome />;
  }
}
