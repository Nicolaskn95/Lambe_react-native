import React, { Component } from 'react'
import {View, StyleSheet, Text, Image, SafeAreaView, Platform } from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
   render() {
      return (
         <SafeAreaView style={styles.container}>
            <View style={styles.rowContainer} >
               <Image source={icon} style={styles.image}/>
               <Text style={styles.title}>Lambe Lambe</Text>
            </View>
         </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create({
   container : {
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      padding: 10,
      borderBottomWidth:1.5,
      borderColor: '#BBB',
      width: '100%'
   },
   title : {
      fontFamily: 'Dancing Script',
      color: '#000',
      fontSize: 30,
      marginBottom: 5
   },
   image: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginBottom: 5
   },
   rowContainer: {
      flexDirection: 'row',
      alignItems: 'center'
   }
})

export default Header