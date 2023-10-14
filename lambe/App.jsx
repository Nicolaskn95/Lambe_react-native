import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

})