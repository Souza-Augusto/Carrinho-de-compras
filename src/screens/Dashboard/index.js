import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";

import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default function Dashboard() {
  function handleSignOut() {
    signOut();
  }

  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.Container}>
      <Button onPress={handleSignOut} title="Sign Out" />
    </View>
  );
}
