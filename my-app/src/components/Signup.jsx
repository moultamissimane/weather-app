import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import LoginBg from "../../assets/LoginBg.png";
import { button1 } from "../common/Button";
import { button3 } from "../common/Button";

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    name: "azerty",
    email: "azerty@gmail.com",
    password: "azert",
    confirmPassword: "azert",
    address: "azrty",
  });

  const [errors, setErrors] = useState(null);

  const sendToBackend = () => {
    // console.log(data);
    if (
      data.name == "" ||
      data.email == "" ||
      data.password == "" ||
      data.confirmPassword == "" ||
      data.address == ""
    ) {
      setErrors("Please fill all the fields");
      return;
    } else {
      if (data.password != data.confirmPassword) {
        setErrors("Password and Confirm Password does not match");
        return;
      } else {
        try {
          fetch("http://192.168.9.22:5000/signup", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) =>
            res.json().then((data) => {
              // console.log(data);
              if (data.error) {
                setErrors(data.message);
              } else {
                alert("Signup Successful");
                navigation.navigate("Login");
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={LoginBg} />
      <ScrollView style={styles.container1}>
        <View style={styles.containerLogin}>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("Welcome")}
          >
            Sign Up
          </Text>
          <Text style={styles.CreateText}>Create an account to continue</Text>

          {errors ? <Text style={styles.error}>{errors}</Text> : null}
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, name: text })}
              style={styles.input1}
              placeholder="Enter your name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, email: text })}
              style={styles.input1}
              placeholder="Enter your email"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, password: text })}
              style={styles.input2}
              secureTextEntry={true}
              placeholder="Enter your password"
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) =>
                setData({ ...data, confirmPassword: text })
              }
              style={styles.input2}
              secureTextEntry={true}
              placeholder="Confirm your password"
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, address: text })}
              style={styles.input2}
              placeholder="Enter your address"
            />
          </View>
          <TouchableOpacity onPress={sendToBackend}>
            <Text style={button3}>Sign Up</Text>
          </TouchableOpacity>

          <Text
            style={styles.Create}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account?{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    marginTop: -40,
    height: "100%",
  },
  error: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 15,
  },
  patternbg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 13,
    borderColor: "#4b66e4",
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 13,
    borderColor: "#4b66e4",
  },
  containerLogin: {
    display: "flex",
    marginTop: "70%",
    width: 410,
    borderRadius: 10,
    height: "100%",
    backgroundColor: "white",
  },
  loginText: {
    display: "flex",
    marginTop: "5%",
    marginLeft: "35%",
    fontSize: 30,
    color: "#4b66e4",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  CreateText: {
    display: "flex",
    marginTop: 2,
    marginLeft: "20%",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
  },

  label: {
    display: "flex",
    marginTop: 1,
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
  },
  fp: {
    display: "flex",
    marginLeft: "65%",
    color: "#4b66e4",
  },
  Create: {
    display: "flex",
    marginTop: -5,
    marginLeft: "30%",
    marginBottom: "10%",
    fontSize: 15,
    fontWeight: "semibold",
    color: "#4b66e4",
  },
});
