import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../store/reducers/authSlice";
import react from "react"
// baseURL: "http://localhost:3000",
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
