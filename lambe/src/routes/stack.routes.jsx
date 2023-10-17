import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

const {Screen, Navigator} = createNativeStackNavigator()

export default function StackRoutes() {
   return (
      <Navigator initialRouteName='login'>
         <Screen name='login' component={Login}/>
         <Screen name='register' component={Register}/>
      </Navigator>
   )
}