import React, { Component } from 'react'
import Header from './components/Header'
import { StyleSheet, Text, View  } from 'react-native'
import Post from './components/Post'

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Header />
          <Post iamge={require('../assets/imgs/fence.jpg')}/>
        </View>
    )
  }
}