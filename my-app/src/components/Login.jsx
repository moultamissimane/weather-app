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

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);

  const sendToBackend = () => {
    // console.log(data);
    if (data.email == "" || data.password == "") {
      setErrors("Please fill all the fields");
      return;
    } else {
      try {
        fetch("http://192.168.9.22:5000/login", {
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
              alert("Login Successful");
              navigation.navigate("Home");
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={LoginBg} />
      <ScrollView style={styles.container1}>
        <View style={styles.containerLogin}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.SigninText}>Sign in to continue</Text>

          {errors ? <Text style={styles.error}>{errors}</Text> : null}

          <View>
            <Text style={styles.email}>Email</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, email: text })}
              style={styles.input1}
              placeholder="Enter your email"
            />
            <Text style={styles.password}>Password</Text>
            <TextInput
              onPressIn={() => setErrors(null)}
              onChangeText={(text) => setData({ ...data, password: text })}
              style={styles.input2}
              placeholder="Enter your password"
            />
          </View>
          <TouchableOpacity onPressIn={sendToBackend}>
            <Text style={button3}>Login</Text>
          </TouchableOpacity>

          <Text
            style={styles.Create}
            onPress={() => navigation.navigate("Signup")}
          >
            Don't have an account?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
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
    marginTop: "20%",
    marginLeft: "40%",
    fontSize: 30,
    color: "#4b66e4",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  SigninText: {
    display: "flex",
    marginTop: 2,
    marginLeft: "30%",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
  },
  email: {
    display: "flex",
    // marginTop: "20%",
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
  },
  password: {
    display: "flex",
    // marginTop: "20%",
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
  },
  loginBtn: {
    display: "flex",
    marginTop: "10%",
    marginLeft: "30%",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
    color: "white",
    backgroundColor: "#4b66e4",
  },
  Create: {
    display: "flex",
    marginTop: "10%",
    marginBottom: "40%",
    marginLeft: "25%",
    fontSize: 20,
    fontWeight: "semibold",
    color: "#4b66e4",
  },
});
