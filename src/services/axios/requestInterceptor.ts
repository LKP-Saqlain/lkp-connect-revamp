import type { AxiosInstance } from "axios";

import { getAccessToken } from "./token";
import { startLoader } from "@/components/common/ApiLoader/loaderManager";

export const setupRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      startLoader();
      const token = getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );
};
