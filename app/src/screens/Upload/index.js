import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

import { ADD_TO_FEED } from '../../store/actions/types'
import { useDispatch } from 'react-redux';

const CameraScreen = () =>{  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  

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
    
    const dispatch = useDispatch();

    if (cameraRef.current) {      
      let photo = await cameraRef.current.takePictureAsync();

      alert(photo)
      
      dispatch({
        type: ADD_TO_FEED,
        payload: {
          photo,
          user: 'Guilherme Alves Pimenta',
          avatar: '../../assets/avatars/jmitch.png'
        },
      })

      
    }
  };


  return (
    <View style={styles.container}>
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
    </View>
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

export default CameraScreen;