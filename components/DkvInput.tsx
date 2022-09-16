import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const DkvPicker = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput style={{height: 40}}
      placeholder = "Consomation"
      onChangeText={newText => setText(newText)}
      defaultValue={text}/>
    </View>
  )
}

export default DkvPicker

const styles = StyleSheet.create({
})