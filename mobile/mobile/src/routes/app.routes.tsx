import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Intro from "../screens/Intro";
import Teste from "../screens/Teste";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="intro" component={Intro} />
      <Screen name="teste" component={Teste} />
    </Navigator>
  );
}
