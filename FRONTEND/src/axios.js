// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1', // fallback for local dev
  withCredentials: true, // so cookies (sessions) are sent
});

export default instance;
