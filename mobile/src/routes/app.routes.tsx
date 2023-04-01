import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Intro from "../screens/Intro";
import Welcome from "../screens/Welcome";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="intro" component={Intro} />

      <Screen name="welcome"component={Welcome} />
    </Navigator>
  );
}
