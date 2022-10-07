import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SuiviScreen = () => {
  return (
    <View>
      <Text style = {styles.container}>En cours de Développements</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default SuiviScreen
