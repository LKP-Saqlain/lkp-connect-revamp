import type { AxiosInstance } from "axios";

export const setupResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,

    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized API request");
      }

      return Promise.reject(error);
    },
  );
};
