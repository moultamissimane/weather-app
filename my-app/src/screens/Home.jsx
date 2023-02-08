import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Night from "../../assets/night.jpg";
import Rain from "../../assets/rain.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useTemp } from "../../context/Temp";
import Loading from "./Loading";
import { BACKGROUND_COLOR, NAV_BACKGROUND_COLOR } from "../../constants/colors";

import DailyData from "../components/DailyData";
// import Animated, { FadeIn } from "react-native-reanimated";

const Home = () => {
  const { height, width } = Dimensions.get("window");
  const [Full_Date, setFull_Date] = useState("");
  const [weatherData, setweatherData] = useState(null);
  const [tempMode, setTempMode] = useState("C");

  useEffect(() => {
    Date = new Date();
    date =
      Date.getDate() + "/" + (Date.getMonth() + 1) + "/" + Date.getFullYear();
    setFull_Date(date);
  }, []);

  useEffect(() => {
    console.log("weatherData");
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar style="inverted" />
      <SafeAreaView>
        <Text style={styles.dateText}>{Full_Date}</Text>
        {/* Present Date */}
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
  },
  date: {
    marginTop: "15%",
    marginLeft: "7%",
  },
  dateText: {
    color: "rgba(255,255,255,0.63)",
    fontSize: 12,
  },
  location: {
    marginTop: 3,
    marginLeft: "6%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 4,
  },
  weatherIconView: {
    display: "flex",
    alignItems: "center",
    // backgroundColor:'red',
    marginVertical: 30,
  },
  tempText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 60,
    alignSelf: "center",
  },
  tempmodeText: {
    color: "rgba(255,255,255,0.4)",
  },
  weatherState: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 2,
  },
  otherData: {
    flex: 0.8,
    flexDirection: "row",
    // width: width - 30,
    backgroundColor: NAV_BACKGROUND_COLOR,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 30,
  },
  Humidity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: NAV_BACKGROUND_COLOR,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  Pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: NAV_BACKGROUND_COLOR,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  WindSpeed: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: NAV_BACKGROUND_COLOR,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  otherDataValueText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
  },
  otherDataText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.55)",
    marginTop: 10,
    textTransform: "capitalize",
  },
  unitText: {
    fontSize: 11,
    color: "rgba(255,255,255,0.55)",
  },
  DailyData: {
    flex: 1,
    // width: width - 30,
    // backgroundColor:NAV_BACKGROUND_COLOR,
    alignSelf: "center",
    borderRadius: 30,
  },
});
