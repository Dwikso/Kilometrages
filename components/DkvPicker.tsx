import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const DkvPicker = () => {
    const [selectValue, setSelectValue] = useState("");
  return (
    <View>
      <Picker selectedValue={selectValue}
      style={{height: 50, width:150}}
      onValueChange = {(itemValue, itemIndex) => setSelectValue(itemValue)}>
        <Picker.Item label='Java' value="Java" />
        <Picker.Item label='JavaScript' value="JavaScript" />
      </Picker>
    </View>
  )
}

export default DkvPicker

const styles = StyleSheet.create({
})