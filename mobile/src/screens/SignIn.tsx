import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function SignIn() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 w-full px-4 items-center justify-center bg-background gap-y-10 relative">
      <Text>ASDSA</Text>
    </View>
  );
}
