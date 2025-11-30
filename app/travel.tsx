
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Signup from "@/Components/week3/Signup";
import Card from "@/Components/week3/Card";
import Hotel from "@/Components/week3/Hotel";
import Menu from "@/Components/week3/Menu";

export default function Travel() {
  return (
    <ScrollView >
      {/* <Text> Week 3 </Text> */}
      <Menu />
      <Card />
      <Hotel />
      <Signup />
    </ScrollView>
  );
}
