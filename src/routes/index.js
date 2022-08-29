import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AuthContext from "../contexts/auth";
import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";

export default function routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={"blue"} />
    </View>;
  }

  return signed ? <AuthRoutes /> : <AppRoutes />;
}
