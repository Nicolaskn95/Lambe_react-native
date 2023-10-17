import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

import AddPhoto from '../screens/AddPhoto'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default function TabRoutes () {
     return (
      <Tab.Navigator 
         initialRouteName='Feed' 
         screenOptions={{
            tabBarShowLabel: true, 
            headerShown:false}}>
         <Tab.Screen
            name='Feed' 
            component={Feed}
            options={{
               tabBarLabel: 'Feed',
               tabBarIcon:({color}) => (
                  <MCI name='home' color={color} size={30}/>
               )
            }}
         />
         <Tab.Screen
            name='AddPhoto'
            component={AddPhoto}
            options={{
               tabBarLabel: 'Add Picture',
               tabBarIcon: ({color}) => (
                  <MCI name='camera' color={color} size={30} />
               )
            }}
         />
         <Tab.Screen 
            name='Profile'
            component={Profile}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({color}) => (
                  <MCI name='account' size={30} color={color}/>
               )
            }}
         />
      </Tab.Navigator>
    )
}