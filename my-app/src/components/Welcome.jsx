import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Weather from '../../assets/Weather.png'
import { button1 } from '../common/Button'
import { button2 } from '../common/Button'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={Weather} />
      <View style={styles.container1}>
        <Text style={button1}
        onPress={() => navigation.navigate('Login')}
        >Login</Text>
        <Text style={button2}
        onPress={() => navigation.navigate('Signup')}
        
        >Signup</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 200,
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
})