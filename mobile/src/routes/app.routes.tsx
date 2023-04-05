import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Intro from "../screens/Intro";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="intro" component={Intro} />

      <Screen name="welcome" component={Welcome} />
      
      <Screen name="signin"component={SignIn} />
      <Screen name="signup"component={SignUp} />
    </Navigator>
  );
}
