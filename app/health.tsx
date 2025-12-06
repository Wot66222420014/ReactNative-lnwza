import Bmi from "@/Components/week5/Bmi";
import Heartbeat from "@/Components/week5/Heartbeat";
import React from "react";
import { View } from "react-native";

export default function Health() {
    return (
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </View>
    );
}
