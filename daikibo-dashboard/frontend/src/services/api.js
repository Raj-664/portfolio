import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const fetchFactories = async () => {
  const response = await api.get('/factories');
  return response.data;
};

export const fetchFactory = async (factoryId) => {
  const response = await api.get(`/factories/${factoryId}`);
  return response.data;
};

export const fetchDevices = async () => {
  const response = await api.get('/devices');
  return response.data;
};

export const fetchDeviceHistory = async (deviceId) => {
  const response = await api.get(`/devices/${deviceId}/history`);
  return response.data;
};

export const fetchTelemetry = async (deviceId) => {
  const response = await api.get(`/telemetry/${deviceId}`);
  return response.data;
};

export default api;
