import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "https://api.b7web.com.br/devbarber/api";

const register = (name, email, password) => {
  return axios({
    url: `${API_URL}/user`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ name, email, password }),
  });
};

const login = (email, password) => {
  return axios({
    method: "POST",
    url: `${API_URL}/auth/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.data.token) {
      return AsyncStorage.setItem("token", response.data.token).then(() => {
        return response.data;
      });
    }
    return Promise.reject();
  });
};

const logout = () => {
  AsyncStorage.removeItem("token")
};

export default {
  register,
  login,
  logout,
};
