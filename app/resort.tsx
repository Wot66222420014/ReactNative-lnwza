import React from 'react';
import { ScrollView, View } from 'react-native';
import Section1 from "@/Components/week3/Section1";
import Section2 from "@/Components/week3/Section2";
import Section3 from "@/Components/week3/Section3";
import Section4 from "@/Components/week3/Section4";
import Section5 from "@/Components/week3/Section5";
import Section6 from "@/Components/week3/Section6";
import Section7 from "@/Components/week3/Section7";
import Section8 from "@/Components/week3/Section8";
export default function Resort() {
  return (
    <ScrollView>
      
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />

    </ScrollView>
  );
}
