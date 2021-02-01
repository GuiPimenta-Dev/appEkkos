import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,Modal,Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons'

import { ADD_TO_FEED } from '../../store/actions/types'
import { useDispatch } from 'react-redux';

const Upload = () =>{  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto,setCapturedPhoto] = useState(false)
  const [open,setOpen] = useState(false)
  const dispatch = useDispatch();
  

  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {

    if (cameraRef.current) {      
      let photo = await cameraRef.current.takePictureAsync();

      setCapturedPhoto(photo.uri);
      setOpen(true);
        
            
    }
  };

  const acceptPhoto = async () => {

    dispatch({
      type: ADD_TO_FEED,
      payload: {
        photo: capturedPhoto,          
        user: 'Guilherme Alves Pimenta',
        avatar: '../../assets/avatars/jmitch.png'
      },
    })

    setOpen(false)

  }


  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} 
              type={type}
              ref={cameraRef}
              >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={ ()=> snap() }
            >
            <Text style={styles.text}> Tirar foto </Text>
          </TouchableOpacity>
        </View>
      </Camera>

            {capturedPhoto && 
              <Modal
              animationType='slide'
              transparent={false}
              visible= {open}
              >
                <View style={{flex:1,justifyContent: 'center' ,alignItems:'center', margin:20}}>
                  
                  <Image 
                    style={{ width:'100%' , height: 300, borderRadius:20 }}
                    source={{ uri: capturedPhoto }}
                  />

                  <View style={{flexDirection: 'row',}}>
                  <TouchableOpacity style={{margin:10}} onPress={ () => acceptPhoto()}>
                    
                    <FontAwesome name="check-square" size={50} color="green"/>
                    
                  </TouchableOpacity>

                  <TouchableOpacity style={{margin:10}} onPress={ () => setOpen(false)}>
                    
                    <FontAwesome name="window-close" size={50} color="#FF0000"/>
                    
                  </TouchableOpacity>
                  </View>

                </View>

              </Modal>

            }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Upload;