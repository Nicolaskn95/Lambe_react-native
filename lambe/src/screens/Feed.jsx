import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
import Comments from '../components/Comments'

class Feed extends Comments {
   state = {
      posts: [{
         id: Math.random(),
         nickname: 'Marcia Norie Fukuhara Nagano',
         email: 'marcia@gmail.com',
         image: require('../../assets/imgs/fence.jpg'),
         comments: [{
            nickname: 'NeymarJr',
            comment: 'Aí sim Pai!'
         }, {
            nickname: 'Sandy Junior',
            comment: 'Foto Linda! Onde foi tirada?'
         }]
      }, {
         id: Math.random(),
         nickname: 'Francisco Leandro Lima',
         email: 'franciso@gmail.com',
         image: require('../../assets/imgs/bw.jpg'),
         comments: []
      }]
   }

   render() {
      return (
         <View style={styles.container}>
            <Header />
            <FlatList 
               data={this.state.posts}
               keyExtractor={item => `${item.id}`}
               renderItem={({item}) => <Post key={item.id} {...item}/>}
            />
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
   }
})

export default Feed