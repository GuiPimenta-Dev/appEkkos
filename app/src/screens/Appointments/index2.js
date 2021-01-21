import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Dimensions,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import { Camera } from 'expo-camera';
import { Container } from './styles';
//import {addPost} from '../store/actions/posts'
import {
  launchCamera,
  launchImageLibrary
} from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
const Appointments = () => {

  const [mystate,setMyState] = useState({image:null,comment:''})
  const [filePath, setFilePath] = useState({});

  // const requestCameraPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         {
  //           title: 'Camera Permission',
  //           message: 'App needs camera permission',
  //         },
  //       );
  //       // If CAMERA Permission is granted
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else return true;
  // };

  async function requestCameraPermission() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      //return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      console.log('foi')
    } else {
      throw new Error('Location permission not granted');
    }
  }
  


  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const save = async () => {
    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image:this.state.image,
      comments: [{
          nickname:this.props.name,
          comment: this.state.comment
      }]
    })

  setMyState({image:null,comment:''})
    
}

  return (
    <Container>
     <ScrollView>
              <View style={styles.container}>
                  <Text style={styles.title}>Compartilhe uma imagem</Text>
                  <View style={styles.imageContainer}>
                    <Image source={{uri: filePath.uri}} 
                        style={styles.image}
                    />
                  </View>
                  <View style={styles.viewButton}>
                  <TouchableOpacity onPress={() => captureImage('photo')}
                    style={styles.buttom}>
                        <Text style={styles.buttomText}>Tirar foto</Text>
                  </TouchableOpacity>                  
                  <TouchableOpacity onPress={() => chooseFile('photo')}
                    style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolher foto</Text>
                  </TouchableOpacity>
                  </View>
      
                  <View style={styles.viewButton}>
                  <TouchableOpacity onPress={() => captureImage('video')}
                    style={styles.buttom}>
                        <Text style={styles.buttomText}>Video</Text>
                  </TouchableOpacity>                  
                  <TouchableOpacity onPress={() => chooseFile('video')}
                    style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolher video</Text>
                  </TouchableOpacity>
                  </View>
                  {<TextInput placeholder='Algum comentario para a foto? '
                    style={styles.input} value={mystate.comment}
                    onChangeText={comment => setMyState({...mystate,comment:comment})}
                 />}
                 <TouchableOpacity onPress={() =>save()}
                    style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
          </ScrollView>
  
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold'
},
imageContainer: {
    width: '90%',
    height:Dimensions.get('window').width /2,
    backgroundColor: '#EEE',
    marginTop:10,
},
image: {
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').width /2,
    resizeMode: 'center'
},
buttom: {
    marginTop: 30,
    padding:10,
    backgroundColor: '#4286f4',
    marginLeft:10,
    height:60,
    width:140,
    borderRadius:15,
    justifyContent:'center',
    alignItems: 'center'
},
buttomText: {
    fontSize: 20,
    color: '#FFF'
},
input: {
    marginTop:20,
    width: '90%'
},
viewButton:{
  flexDirection:'row',
  
}

});


export default Appointments;
