import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DashBoard from "../screens/Dashboard";
const AuthRoutes = createNativeStackNavigator();

export default function routes() {
  return (
    <AuthRoutes.Navigator>
      <AuthRoutes.Screen name="DashBoard" component={DashBoard} />
    </AuthRoutes.Navigator>
  );
}
