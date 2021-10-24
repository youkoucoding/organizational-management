import axios from "axios";

const endPoint = {
  dev: "http://localhost:3001",
};

const apiClient = axios.create({
  baseURL: endPoint.dev,
  timeout: 10000,
  headers: { Accept: "application/json" },
});

export default apiClient;
