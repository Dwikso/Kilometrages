import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import SuiviScreen from './screens/suivi-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName = "Main" >
      <Drawer.Screen name = "Options-Véhicule" component={MainScreen}/>
      <Drawer.Screen name = "Suivi" component = {SuiviScreen} />
    </Drawer.Navigator>
)}
