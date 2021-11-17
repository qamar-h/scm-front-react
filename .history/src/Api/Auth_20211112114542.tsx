import axios from 'axios';

const AUTHENTICATION_URI = 'http://localhost:3001/api/authentication';

export interface authenticationResponse {
    data: {token: string};
}

export function authentication(login: string, password: string) 
{
    return axios.post(AUTHENTICATION_URI, {
        email: login,
        password
    });
}

export function logout(): void
{

}