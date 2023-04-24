import axios, { type AxiosInstance, type AxiosResponse } from 'axios';


const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/', // URL de la API a la que se conectará
    timeout: 5000, // tiempo máximo de espera antes de que se agote el tiempo de espera
    headers: {
        'Content-Type': 'application/json', // tipo de contenido de las solicitudes
        Accept: 'application/json', // tipo de contenido de las respuestas
    },
});

// Interceptor para agregar el token de autenticación en las solicitudes
/* axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
); */

// Interceptor para manejar los errores de la API
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response.status === 401) {
            // Manejar el error de autenticación
        } else if (error.response.status >= 400 && error.response.status < 500) {
            // Manejar otros errores de la API
        } else {
            // Manejar otros errores del servidor
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
