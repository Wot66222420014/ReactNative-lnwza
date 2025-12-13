import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
  const [onlineEvents, setOnlineEvents] = useState<any[]>([]);

  const loadOnlineEvents = async () => {
    try {
      let response = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await response.json();
      console.log("Load Data : ", data);
      setOnlineEvents(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    loadOnlineEvents();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Up Coming Events
      </Text>
      <Text style={{ color: "grey", marginBottom: 10 }}>
        What's the Worst That Could Happen
      </Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={onlineEvents}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }: any) => {
          console.log(item, index);
          return (
            <View style={{ width: 260, marginRight: 15 }}>
              {/* Image */}
              <Image
                style={{
                  width: "100%",
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={{ uri: item.uri }}
              />

              {/* Content */}
              <View
                style={{
                  flexDirection: "row",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderWidth: 1,
                  borderColor: "gray",
                }}
              >
                {/* Date */}
                <View style={{ padding: 10, alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {item.month}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.date}
                  </Text>
                </View>

                {/* Detail */}
                <View style={{ padding: 10, flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "gray" }}>{item.datetime}</Text>
                  <Text style={{ color: "gray" }}>{item.place}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
