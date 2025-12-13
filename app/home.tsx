import Cover from "@/Components/week6/Cover";
import Event from "@/Components/week6/Event";
import HomeIconMenu from "@/Components/week6/HomeIconMenu";
import TourFlatList from "@/Components/week6/TourFlatList";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
                <TourFlatList style={{ margin: 20 }} />
                <TourFlatList style={{ margin: 20 }} />
                <Event style={{ margin: 20 }} />
            </View>
        </ScrollView>

    );
}
