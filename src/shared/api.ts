import axios, { AxiosError, type AxiosRequestConfig } from "axios";

// --------------------------------------------------

const { VITE_API_URL } = import.meta.env;

// --------------------------------------------------

const api = () => {
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        const data = error.response.data as {
          type: string;
          title: string;
          status: number;
          detail: string;
          instance: string;
        };

        return Promise.reject({
          status: data?.status || error.response.status,
          message: data?.detail || data?.title || "An unexpected error has occurred.",
          raw: data,
        });
      }

      return Promise.reject({
        status: 0,
        message: "Unable to connect to the server. Please check your network connection.",
        raw: error,
      });
    },
  );

  return {
    get: <T>(url: string, config?: AxiosRequestConfig<T>) => (
      instance.get<T>(url, config)
    ),
    delete: <T>(url: string, config?: AxiosRequestConfig<T>) => (
      instance.delete<T>(url, config)
    ),
    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) => (
      instance.post<T>(url, data, config)
    ),
    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) => (
      instance.put<T>(url, data, config)
    ),
    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) => (
      instance.patch<T>(url, data, config)
    ),
  };
};

// --------------------------------------------------

export default api();
