import React from "react";
import { View, StyleSheet, Platform } from "react-native";

const AndroidSafeAreaView = () => {
  return <View style={styles.androidSafeArea}></View>;
};
const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    background: "red",
  },
});
export default AndroidSafeAreaView;
