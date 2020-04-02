import Axios from "axios";
import config from "./config"

export interface ServerResponse<T> {
    success: boolean
    message: string
    data: T
}

const axiosInstane = Axios.create({
    baseURL: config.getBasePath(),
    timeout: config.getDefaultTimeout(),
});

axiosInstane.interceptors.request.use(function (config) {
    // config.headers["Authorization"] = auth.jwt
    return config;
  }, function (error) {
    return Promise.reject(error);
});


axiosInstane.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axiosInstane;