import axios, { AxiosResponse } from 'axios';
import credentialsInterface from '../Page/Login/credentialsInterface';
import StorageHandler from '../Utils/StorageHandler';

const { REACT_APP_API_URL } = process.env
const AUTHENTICATION_URI = '/authentication';

export interface authenticationResponse {
    data: {token: string};
}

/**
 * allows to manage the authentication from api
 * @param credentials 
 * @returns 
 */
export function authentication(credentials: credentialsInterface): AxiosResponse
{
    return axios.post(REACT_APP_API_URL + AUTHENTICATION_URI, {
        email: credentials.login,
        password: credentials.password
    });
}

export function logout(navigate: any): void
{
    StorageHandler.remove('token');
    navigate('/login');
}