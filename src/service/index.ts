import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';


const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL , // URL de la API a la que se conectará
    timeout: 5000, // tiempo máximo de espera antes de que se agote el tiempo de espera
    headers: {
        'Content-Type': 'application/json', // tipo de contenido de las solicitudes
        Accept: 'application/json', // tipo de contenido de las respuestas
        'Access-Control-Allow-Origin': import.meta.env.VITE_BACK_URL,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers' : '*'
    },
});

// Interceptor para agregar el token de autenticación en las solicitudes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // console.log(config.headers);
        return config;
    },
    (error) => Promise.reject(error),
);

// Interceptor para manejar los errores de la API
// axiosInstance.interceptors.response.use(
//     (response: AxiosResponse) => response,
//     (error) => {  
//         if (error.response.status === 401) {
//             // Manejar el error de autenticación
//         } else if (error.response.status >= 400 && error.response.status < 500) {
//             // Manejar otros errores de la API
//         } else {
//             // Manejar otros errores del servidor
//         }
//         return Promise.reject(error);
//     },
// );

export default axiosInstance;
