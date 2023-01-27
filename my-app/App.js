import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import Welcome from "./src/components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome/> */}
      {/* <Login /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
