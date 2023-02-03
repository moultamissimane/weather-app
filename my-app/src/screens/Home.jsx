import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Night from "../../assets/night.jpg";
import Rain from "../../assets/rain.jpg";
import * as Location from "expo-location";
import { API_KEY } from "../../constants/Keys";


const Home = () => {
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            alert("permission is required");
            return;
          } else {
            let location = await Location.getCurrentPositionAsync({});
            let Data = "Waiting..";
            let Longitude_Latitude = null;
            Data = JSON.stringify(location.coords);
            Longitude_Latitude = JSON.parse(Data);
    
            //APi Call After Getting Location
            const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${Longitude_Latitude["latitude"]}&lon=${Longitude_Latitude["longitude"]}&units=metric&appid=${API_KEY}`;
            try {
              const res = await fetch(URL);
              const data = await res.json();
              setWeatherData(data);
            } catch (e) {
              setFetchError(true);
            }
          }
        })();
      }, []);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ width: windowWidth, height: windowHeight }}>
          <ImageBackground source={Night} style={{ flex: 1 }}></ImageBackground>
        </View>
        <View style={{ width: windowWidth, height: windowHeight }}>
          <ImageBackground source={Rain} style={{ flex: 1 }}></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
