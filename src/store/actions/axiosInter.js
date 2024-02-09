import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

axiosInstance.interceptors.request.use(function (config) {
    config.params = {
        api_key: 'c0a540d14454051cf74ee4debd0b604e',
        ...config.params,
    };

    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axiosInstance;