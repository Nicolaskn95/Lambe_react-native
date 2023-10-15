import React, { Component, useState } from 'react'
import { launchCamera, launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker'

import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   TextInput,
   Image,
   Dimensions,
   Platform,
   ScrollView,
   Alert,
   PermissionsAndroid
} from 'react-native'

class AddPhoto extends Component {

   state = {
      image: null,
      comment: ''
   }

   options = {
      saveToPhotos: true,
      mediaType: 'photo'
   }

    handleImageUser = () => {
      Alert.alert('Seleione','Informe o local que vc quer pegar a foto',[
         {
            text: 'Galeria',
            onPress: () => this.pickImageFromGalery(),
            style: 'default'
         },
         {
            text: 'Camera',
            onPress: () => this.pickImageFromCamera(),
            style: 'default'           
         }
      ],{
         cancelable: true,
         onDismiss: () => console.log('tratar depois')
      }
      )
   }


   pickImageFromGalery = async () => {
      const options = {
         mediaType: 'photo',
         includeBase64: 'true'
      }
      const result = await launchImageLibrary(options)
      console.warn(result)
      if(result.assets) {
         this.state.image = result.assets[0].uri
      }
   };

    pickImageFromCamera = async () => {

      const result = await launchCamera(options)         
   }

   save = async () => {
      Alert.alert('imagem adicionada', this.state.comment)
   }

   render() {
      return(
            <ScrollView>
               <View style={styles.container}>
                  <Text style={styles.title}>Compartilhe uma imagem</Text>
                  <View style={styles.imageContainer}>
                     <Image source={this.state.image} style={styles.image}/>
                  </View>
                  <TouchableOpacity onPress={this.handleImageUser} style={styles.buttom}>
                     <Text style={styles.buttomText}>Abrir a camera</Text>
                  </TouchableOpacity>
                  <TextInput 
                     placeholder='Algum comentário para a foto?'
                     style={styles.input}
                     value={this.state.comment}
                     onChangeText={comment => this.setState({comment})}
                  />
                  <TouchableOpacity onPress={this.save} style={styles.buttom}>
                     <Text style={styles.buttomText}>Salvar</Text>
                  </TouchableOpacity>
               </View>
            </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontSize: 20,
      marginTop: Platform.OS === 'ios' ? 30 : 10,
      fontWeight: 'bold'
   },
   imageContainer:{
      width: '90%',
      height: Dimensions.get('window').width / 2,
      backgroundColor: '#EEE',
      marginTop: 10
   },
   image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width / 2,
      resizeMode: 'center'
   },
   buttom: {
      marginTop: 30,
      padding: 10,
      backgroundColor: '#4286f4'
   },
   buttomText : {
      fontSize: 20,
      color: '#FFF'
   },
   input: {
      marginTop: 20,
      width: '90%'
   }
})

export default AddPhoto