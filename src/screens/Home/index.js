import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function Home(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("DashBoard")}>
      <Text>DashBoard</Text>
    </TouchableOpacity>
  );
}
