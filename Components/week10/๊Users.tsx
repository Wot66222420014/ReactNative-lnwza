import React from "react";
import { Marker, Callout } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

export default function UserMarkers({ users }: any) {
  return (
    <>
      {users.map((u: any) => (
        <Marker
          key={u.user_id}
          coordinate={{
            latitude: Number(u.latitude),
            longitude: Number(u.longitude),
          }}
        >
          <FontAwesome name="user" size={30} color="blue" />

          <Callout>
            <Text>user_id: {u.user_id}</Text>
          </Callout>
        </Marker>
      ))}
    </>
  );
}