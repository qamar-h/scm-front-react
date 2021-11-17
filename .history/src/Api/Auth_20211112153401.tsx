import axios from 'axios';
import credentialsInterface from '../Page/Login/credentialsInterface';

const { REACT_APP_API_URL } = process.env
const AUTHENTICATION_URI = '/authentication';

export interface authenticationResponse {
    data: {token: string};
}

export function authentication(credentials: credentialsInterface) 
{
    return axios.post(REACT_APP_API_URL + AUTHENTICATION_URI, {
        email: credentials.login,
        password: credentials.password
    });
}

export function logout(navigate: any): void
{
    
}