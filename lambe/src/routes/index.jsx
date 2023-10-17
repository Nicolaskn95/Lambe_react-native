
import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import  TabRoutes  from './tab.routes'
import  StackRoutes  from './stack.routes'


class Routes extends Component {

   state={
      isAuthenticated: false
   }

  render() {
   const {isAuthenticated} = this.state
     return (
        <NavigationContainer>
           { isAuthenticated ? <TabRoutes /> : <StackRoutes />}
        </NavigationContainer>
     )
  }
}

export default Routes