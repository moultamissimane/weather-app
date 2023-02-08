import React, { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { API_KEY } from "../constants/Keys";

const TempratureContext = createContext({});

export function useTemp() {
  return useContext(TempratureContext);
}

function TempratureContextProvider({ children }) {
  const [tempMode, setTempMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [StateWeatherData, setStateWeatherData] = useState(null);
  const [FetchError, setFetchError] = useState(false);

  useEffect(() => {
    (async function () {
      let status = (await Location.requestForegroundPermissionsAsync()).status;
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

  async function getStateWeatherData(cityVal) {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${API_KEY}`;
      const res = await fetch(URL);
      const data = await res.json();
      setStateWeatherData(data);
    } catch (e) {
      setFetchError(true);
    }
  }

  const value = {
    tempMode,
    weatherData,
    getStateWeatherData,
    StateWeatherData,
    FetchError,
  };
  return (
    <TempratureContext.Provider value={value}>
      {children}
    </TempratureContext.Provider>
  );
}

export default TempratureContextProvider;
