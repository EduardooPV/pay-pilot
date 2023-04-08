import { View } from "react-native";
import Welcome from "./Welcome";

import { Loading } from "../components/Loading";
import Header from "../components/Header";
import SummaryUser from "../components/Summary";
import Operations from "../components/Operations";

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

        <Operations />
      </View>
    );
  } else {
    return <Welcome />;
  }
}
