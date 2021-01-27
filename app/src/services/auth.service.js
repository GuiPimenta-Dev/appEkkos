import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "https://api.b7web.com.br/devbarber/api";

const register = (username, email, password) => {
  return axios({
    url: `${API_URL}/user`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ username, email, password }),
  });
};

const login = (username, password) => {
  return axios({
    method: "POST",
    url: `${API_URL}/auth/login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ username, password }),
  }).then((response) => {
    console.log(response.data);
    if (response.data.accessToken) {
      return AsyncStorage.setItem("user",response.data.accessToken).then(() => {
        return response.data;
      });
    }
    return response.data;
  });
};

const logout = () => {
  // localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
