import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from "react-redux";
import {Container} from './styles';
import { logout } from "../../store/actions/auth";

const Profile = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const handleLogoutClick = async () => {
    dispatch(logout())
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Text>Profile Screen</Text>
      <Button title="sair" onPress={handleLogoutClick} />
    </Container>
  );
};

export default Profile;
