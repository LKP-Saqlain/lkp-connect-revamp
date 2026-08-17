import axios from "axios";

import { setupRequestInterceptor } from "./requestInterceptor";
import { setupResponseInterceptor } from "./responseInterceptor";

const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 120000),

  headers: {
    "Content-Type": "application/json",
  },
});

setupRequestInterceptor(baseInstance);
setupResponseInterceptor(baseInstance);

export default baseInstance;
