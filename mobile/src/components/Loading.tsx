import { ActivityIndicator, View } from "react-native";

interface LoadingProps {
  background?: string;
  color?: string;
  small?: boolean;
}

export function Loading({ color, small, background }: LoadingProps) {
  return (
    <View
      className="flex-1 items-center justify-center bg-background"
      style={background ? { backgroundColor: background } : null}
    >
      <ActivityIndicator
        color={color ? color : "#4977FF"}
        size={small ? "small" : "large"}
      />
    </View>
  );
}
