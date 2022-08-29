import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Signin from "../screens/Signin";
const AuthStack = createNativeStackNavigator();

export default function routes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={Signin} />
    </AuthStack.Navigator>
  );
}
