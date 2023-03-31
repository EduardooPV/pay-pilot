import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator color="#4977FF" size="large" />
    </View>
  );
}
