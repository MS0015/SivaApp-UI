import { Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Divider from "../comp/Divider";
import Header from "../comp/Header";
import SelectHashTag from "../comp/SelectHashTag";
import SelectLocation from "../comp/SelectLocation";
import TextArea from "../comp/TextArea";

export default function AddPost() {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0.1 }}
      colors={["#00205F", "#AA4B74"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ padding: 10 }}>
        <Header />
        <TextArea />
        <Divider />
        <SelectHashTag />
        <SelectLocation />
      </SafeAreaView>
    </LinearGradient>
  );
}
