import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DkvPicker from './DkvPicker'

const Dkvconfig = () => {
  return (
    <View style={styles.items}>
        <Text style={styles.about}>Information Concernant le Véhicule</Text>
        <Text style={styles.separator}>_______________________________________________</Text>
            <View style={styles.vehicule}>  
                <View style={styles.config_1}>
                    <Text>Consomation Véhicule :  </Text>
                </View>
                <View style={styles.config_2}>
                    <Text>Compteur</Text>
                </View>
            </View>
            <View style={styles.picker_1}>
                <DkvPicker />
            </View>

            <View style={styles.picker_2}>
                <DkvPicker />
            </View>
    </View>
  )
}

export default Dkvconfig

const styles = StyleSheet.create({
    items:{
        backgroundColor: '#fff',
        padding: 22,
        paddingTop: 90,
        borderRadius: 10,
        top:50,
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
    vehicule: {
        top: 80
    },
    config_1: {
        top: -100
    },
    config_2: {
        top: -20
    },
    picker_1:{
        top:-75,
        left: 180
    },
    picker_2:{
        top:-25,
        left: 180
    }
})