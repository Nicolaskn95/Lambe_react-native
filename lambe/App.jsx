import React, { Component } from 'react'

import { Text, SafeAreaView } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <SafeAreaView>
        <Text style={{fontSize: 30, fontFamily: 'Dancing Script'}}>Lambe Lambe</Text>
        <Text style={{fontSize: 30, fontFamily: 'shelter'}}>Lambe Lambe</Text>
      </SafeAreaView>
    )
  }
}