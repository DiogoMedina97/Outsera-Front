import axios, { type AxiosRequestConfig } from "axios";

// --------------------------------------------------

const { VITE_API_URL } = import.meta.env;

// --------------------------------------------------

const api = () => {
  const instance = axios.create({
    baseURL: VITE_API_URL,
  });

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
