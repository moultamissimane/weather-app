import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import LoginBg from "../../assets/LoginBg.png";
import { button1 } from "../common/Button";
import { button3 } from "../common/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={LoginBg} />
      <View style={styles.container1}>
        <View style={styles.containerLogin}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.SigninText}>Sign in to continue</Text>
          <View>
            <Text style={styles.email}>Email</Text>
            <TextInput style={styles.input1} placeholder="Enter your email" />
            <Text style={styles.password}>Password</Text>
            <TextInput
              style={styles.input2}
              placeholder="Enter your password"
            />
          </View>
          <View>
            <Text style={styles.fp}>Forget password?</Text>
          </View>
          <Text style={button3}>Login</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
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
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 13,
    borderColor: "#4b66e4",
    // backgroundColor: '#4b66e4'
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
  fp: {
    display: "flex",
    marginLeft: "65%",
    color: "#4b66e4",
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
});
