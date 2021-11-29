import axios, { AxiosRequestConfig } from "axios";
import StorageHandler from "../Utils/StorageHandler";

export function addToken()
{
    return axios.interceptors.request.use((req: AxiosRequestConfig) => {

        let token = null;
        const current_logged: string = StorageHandler.get('scm_current_logged');
        
        if (current_logged !== null) {
            token = JSON.parse(current_logged)?.token;
        }

        if (token !== null && typeof token != "undefined") {
            //@ts-ignore
            req.headers.Authorization = `Bearer ${token}`;
        }
        
        return req;
    });
}