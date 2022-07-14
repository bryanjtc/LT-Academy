import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://localhost:7049"
      : undefined,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default api;
