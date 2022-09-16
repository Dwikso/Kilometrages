import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dkvconfig from './Dkvconfig'
import DkvKm from './DkvKm'

const Dkv = () => {
  return (

    <View style={styles.dkvWrapper}>
        <Text style={styles.sectionTitle}>Suivi Dkv</Text>
        <Dkvconfig />
          <View>
            <DkvKm />
          </View>
          
    </View>
  )
}

export default Dkv

const styles = StyleSheet.create({
    dkvWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})