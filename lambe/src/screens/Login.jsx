import React, { Component } from 'react'

import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TextInput
} from 'react-native'

class Login extends Component {

      state = {
         email: '',
         password: ''
      }

   login = () => {
      this.props.navigation.navigate('')
   }

   newAccount = () => {
      this.props.navigation.navigate('register')
   }

   render() {
      return (
         <View style={styles.container}>
            <TextInput 
            placeholder='Email' 
            style={styles.input}
            autoFocus={true}
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
         />
         <TextInput 
            placeholder='Senha'
            style={styles.input}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
         />
         <TouchableOpacity onPress={this.login} style={styles.buttom}>
            <Text style={styles.buttomText}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={this.newAccount} style={styles.buttom}>
            <Text style={styles.buttomText}>Criar nova conta...</Text>
         </TouchableOpacity>
            
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   input: {
      marginTop: 20,
      width: '90%',
      backgroundColor: '#EEE',
      borderWidth: 1,
      borderColor: '#333'
   },
   buttomText: {
      fontSize: 20,
      color: '#FFF'
   },
   buttom: {
      marginTop: 30,
      padding: 10,
      backgroundColor: '#4286f4'
   },
})

export default Login