import type { AxiosInstance } from "axios";

import { stopLoader } from "@/components/common/ApiLoader/loaderManager";

export const setupResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      stopLoader();
      return response;
    },

    (error) => {
      stopLoader();

      if (error.response?.status === 401) {
        console.error("Unauthorized API request");
      }

      return Promise.reject(error);
    },
  );
};
