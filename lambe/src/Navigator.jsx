import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

import AddPhoto from './screens/AddPhoto'
import Feed from './screens/Feed'

const Tab = createBottomTabNavigator()

function Profile () {
   <View>
      <Text>profile</Text>
   </View>
}

class Navigator extends Component{
  render() {

     return (
        <NavigationContainer>
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
               tabBarIcon: ({color}) => {
                  <MCI name='camera' color={color} size={30} />
               }
            }}
         />
         <Tab.Screen 
            name='profile'
            component={Profile}
            options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({color}) => {
                  <MCI name='user' size={30} color={color}/>
               }
            }}
         />
      </Tab.Navigator>
    </NavigationContainer>  
    )
   }
}

export default Navigator