import { ActivityIndicator, View } from "react-native";

interface LoadingProps {
  color?: string;
  small?: boolean;
}

export function Loading({ color, small }: LoadingProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator
        color={color ? color : "#4977FF"}
        size={small ? "small" : "large"}
      />
    </View>
  );
}
