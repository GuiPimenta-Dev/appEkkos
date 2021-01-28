import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { StyleSheet, Image } from "react-native";

import { register } from "../../store/actions/auth";

import {
  Container,
  FormArea,
  CustomButton,
  CustomButtonText,
  SignMessage,
  SignMessageText,
  SignMessageTextBold,
} from "./styles";

import Api from "../../Api";

import InputField from "../../components/InputField";
import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

const SignUp = () => {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const [successful, setSuccessful] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSignPress = () => {
    if (nameField !== "" && emailField.trim() !== "" && passwordField !== "") {
      dispatch(register(nameField, emailField, passwordField))
        .then(() => {
          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
          setSuccessful(true);
        })
        .catch((e) => {
          alert(`Error: ${e}`);
          setSuccessful(false);
        });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleSignMessagePress = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/EkkosLogo.png")}
      />
      <FormArea>
        <InputField
          IconSvg={PersonIcon}
          placeholder="Digite seu nome completo"
          value={nameField}
          onChangeText={(text) => setNameField(text)}
        />
        <InputField
          IconSvg={EmailIcon}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(text) => setEmailField(text)}
        />
        <InputField
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(text) => setPasswordField(text)}
          password
        />

        <CustomButton onPress={handleSignPress}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </FormArea>

      <SignMessage onPress={handleSignMessagePress}>
        <SignMessageText>Já possui uma conta?</SignMessageText>
        <SignMessageTextBold>Faça Login</SignMessageTextBold>
      </SignMessage>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: "100%",
    height: 160,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default SignUp;
