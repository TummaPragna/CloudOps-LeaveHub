import axios from "axios";

const api = axios.create({
  baseURL: "http://34.207.74.58:9091"
});

export default api;