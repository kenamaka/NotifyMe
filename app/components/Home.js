import React from 'react'
import { StyleSheet, Button,TextInput, View } from 'react-native'

export default function Home() {
    return (
        <View style = {styles.container}>
            <TextInput placeholder="Serach..."  style = {{ borderColor: "black", borderWidth:1 }} />
            <Button title= "search"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:50,
    }
})
