import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Intro from "../screens/Intro";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";

import { UserAuth } from "../context/FireBaseAuth";
import { Loading } from "../components/Loading";

export function AppRoutes() {
  const { user, authChecked } = UserAuth();

  if (!authChecked) {
    return <Loading />;
  }
  
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Screen name="home" component={Home} />
      ) : (
        <Screen name="intro" component={Intro} />
      )}
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
    </Navigator>
  );
}
