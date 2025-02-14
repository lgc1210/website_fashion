import axios from "axios";
import {
  clearTokens,
  getStoredRefreshToken,
  getStoredToken,
  storeTokens,
} from "../../utils";

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = getStoredToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // if (error.response?.status === 401) {
    //   const refresh_token = getStoredRefreshToken();
    //   if (refresh_token) {
    //     const response = await userActions.refresh({ refresh_token });

    //     if (response?.data?.access) {
    //       storeTokens(response.data.access, response.data.refresh);

    //       error.config.headers[
    //         "Authorization"
    //       ] = `Bearer ${response?.data?.access}`;

    //       return instance(error.config);
    //     }
    //   }
    // }
    return Promise.reject(error);
  }
);

export const userActions = {
  read: async () => await instance.get("users/get"),
  create: async (payload) => await instance.post("users/create", payload),
  update: async (payload) => await instance.post("users/update", payload),
  delete: async (payload) => await instance.post("users/delete", payload),
  login: async (payload) => await instance.post("auth/login", payload),
  register: async (payload) => await instance.post("auth/register", payload),
  logout: async () => {
    const refreshToken = getStoredRefreshToken();
    return await instance.post("auth/logout", { refresh_token: refreshToken });
  },
  // refresh: (payload) => instance.post("auth/refresh", payload),
};

export default instance;
