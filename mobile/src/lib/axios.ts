import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.247:3333",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const user_id = await AsyncStorage.getItem("user_id");
    const refresh_token = await AsyncStorage.getItem("refresh_token");

    return new Promise(async (resolve, reject) => {
      const originalReq = err.config;

      if (err.response.status == 401 && err.config && !err.config._retry) {
        originalReq._retry = true;

        const response = await api.post("/user/refresh-token", {
          refresh_token,
        });

        if (response) {
          AsyncStorage.setItem("token", response.data.token);
          originalReq.headers[
            "Authorization"
          ] = `Bearer ${response.data.token}`;

          resolve(response);
          return api(originalReq);
        }
      } else {
        reject(err);
      }
    });
  }
);

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  const user_id = await AsyncStorage.getItem("user_id");

  config.headers["Authorization"] = `Bearer ${token}`;
  config.headers["id"] = user_id;

  return config;
});