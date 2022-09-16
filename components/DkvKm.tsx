import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DkvPicker from './DkvInput'

const DkvKm = () => {
  return (
    <View style={styles.items}>
        <Text style={styles.about}>Information Concernant le Véhicule</Text>
        <Text style={styles.separator}>_______________________________________________</Text>
    </View>
  )
}

export default DkvKm

const styles = StyleSheet.create({
    items:{
        backgroundColor: '#fff',
        padding: 22,
        paddingTop: 90,
        borderRadius: 10,
        top:100,
    },
    about: {
        fontSize: 17,
        fontWeight: 'bold',
        top: -70
    },

    separator: {
        color: '#E8EAED',
        top: -60
    },
})