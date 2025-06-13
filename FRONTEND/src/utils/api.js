import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/v1"
    : "https://netflix-backend.onrender.com/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // optional: use only if cookies/sessions needed
});

export default api;
