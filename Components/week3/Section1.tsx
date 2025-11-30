import React from "react";
import { View, Image } from "react-native";

export default function Section1() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("@/assets/week3/room-1.jpg")} // ← แก้ path ตามรูปของคุณ
          style={{
            flex: 1,
            resizeMode: "cover",
            aspectRatio: 3 / 1, // ปรับอัตราส่วนตามภาพ
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
