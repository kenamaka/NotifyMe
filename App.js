
import React from 'react';
import { View, StyleSheet } from 'react-native'
import Splash from './app/components/Splash';
import Home from './app/components/Home';



export default function App() {
  return (
    <View style ={styles.container}>
      {/* <Splash /> */}
      <Home/>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex:1
  }
})
