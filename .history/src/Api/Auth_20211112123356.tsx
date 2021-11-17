import axios from 'axios';
import credentialsInterface from '../Page/Login/credentialsInterface';

const AUTHENTICATION_URI = 'http://localhost:3001/api/authentication';

export interface authenticationResponse {
    data: {token: string};
}

export function authentication(credentials: credentialsInterface) 
{
    return axios.post(AUTHENTICATION_URI, {
        email: login,
        password
    });
}

export function loout(): void
{
    
}