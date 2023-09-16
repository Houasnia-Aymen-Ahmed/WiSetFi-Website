import axios from "axios";

const baseURL = "http://localhost:8000/api/"; // Change this if your Django server is running on a different port

const api = axios.create({
  baseURL: baseURL,
});

export default api;
