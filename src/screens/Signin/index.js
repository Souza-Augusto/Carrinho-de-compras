import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AuthContext from "../../contexts/auth";

export default function Signin(props) {
  const { signed, user, signIn } = useContext(AuthContext);

  console.log("Signed:", signed);
  console.log("user:", user);

  async function handleSignIn() {
    signIn();
  }

  return (
    <TouchableOpacity onPress={handleSignIn}>
      <Text>Sigh In</Text>
    </TouchableOpacity>
  );
}
