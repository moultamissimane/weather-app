import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Error = () => {
  return (
    <View style={styles.main}>
      <StatusBar style="inverted" />
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/ErrorAnimation.json")}
        style={{ height: 250, width: 250 }}
      />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101010",
  },
  text: {
    color: "#fff",
  },
});
