import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { getLocation } from "@/utils/gps";

export default function LocationQuiz() {
  const [location, setLocation] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);

  const onLoad = async () => {
    let loc = await getLocation();
    if (loc) setLocation(loc);
  };

  const loadUsers = async () => {
    try {
      const res = await fetch("https://ckartisan.com/api/location");
      const json = await res.json();
      setUsers(Array.isArray(json) ? json : json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
    loadUsers();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center" }}>
        {location ? new Date(location.timestamp).toString() : "-"}
      </Text>

      {/* แถบข้อมูล */}
      <View style={{ flexDirection: "row", height: 70, backgroundColor: "#50E3C2" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center" }}>Lat/Lon</Text>
          <Text style={{ textAlign: "center" }}>
            {location ? location.coords.latitude : "-"}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {location ? location.coords.longitude : "-"}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "center" }}>Speed / Accuracy</Text>
          <Text style={{ textAlign: "center" }}>
            {location && location.coords.speed != null
              ? Number(location.coords.speed * 3.6).toFixed(0)
              : "-"}{" "}
            km/h
          </Text>
          <Text style={{ textAlign: "center" }}>
            {location && location.coords.accuracy != null
              ? Number(location.coords.accuracy).toFixed(0)
              : "-"}{" "}
            m.
          </Text>
        </View>
      </View>

      {/* MAP */}
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: location ? location.coords.latitude : 13.7563,
            longitude: location ? location.coords.longitude : 100.5018,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* ตำแหน่งเรา */}
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            >
              <FontAwesome name="map-marker" size={36} color="red" />
              <Callout>
                <Text>ตำแหน่งของฉัน</Text>
              </Callout>
            </Marker>
          )}

          {/* ผู้ใช้จาก API */}
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
        </MapView>
      </View>
    </View>
  );
}
