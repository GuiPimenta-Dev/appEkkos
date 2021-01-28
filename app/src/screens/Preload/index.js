import React,{useEffect, useContext} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../Api';

import {Container, LoadingIcon} from './styles';


const Preload = () => {
  
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        const response = await Api.verifyToken(token);

        if (response.token) {
          await AsyncStorage.setItem('token', response.token);

          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };

    checkToken();
  }, []);
  

  return (
    <Container>
        <Image   
        style={styles.tinyLogo}     
        source={require('../../assets/EkkosLogo.png')}
        />
        
        <LoadingIcon size="large" color="#fff" />
        
    </Container>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: '100%',
      height: 160,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  


export default Preload;
