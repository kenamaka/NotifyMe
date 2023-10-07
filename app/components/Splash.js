import React from 'react'
import {Text, StyleSheet, View, Image,Button,TouchableOpacity } from 'react-native'

function Splash() {
    return (

        <View
            style= {styles.background} 
          >
            <View style={styles.container}>
                <Image style = {styles.logo} source={require("../assets/logo.png")} />
                <TouchableOpacity
                    style={styles.torch}
                    onPress={() => alert("i was clicked")}
                >
                  <Text style= {styles.textstyle}>Get Started >>>></Text>
                </TouchableOpacity>
            </View>
             </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:"#00091a",
        justifyConten: "center",
        alignItems: "center",
        resizeMode: "cover",

    },
    textstyle: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight:"800",
    },
    container: {
        top: 60,
        alignItems:"center",
        
       },
    logo: {
        top:50,
        width: 200,
        height: 400,
        
    },
    torch: {
        top:70,
        padding:10,
        paddingBotton: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#0080ff",
        borderRadius: 10,
        borderWidth: 1,
         }
})

export default Splash;
