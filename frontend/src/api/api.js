import axios from "axios";

const api = axios.create({
  baseURL: "http://54.91.17.201:9091"
});

export default api;