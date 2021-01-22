import React from 'react';
import { View,StyleSheet,Text,Platform,Image } from 'react-native';
import icon from '../assets/icon.png'

export default function components() {
 return (
   <View style={styles.container}>
       <View style={styles.rowContainer}>
           
           <Text style={styles.title}>Ekkos</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 30,
        padding:10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        alignItems: 'center'

    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: 30,
        width:30,
        resizeMode: 'contain'
    },
    title:{
        color: '#fff',
        height:30,
        fontSize:25,        
        alignItems: 'center'
    }
})

