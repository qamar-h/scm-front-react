import axios from 'axios';
import UserAuthenticated from '../Auth/UserAuthenticated';
import credentialsInterface from '../Page/Login/credentialsInterface';
import StorageHandler from '../Utils/StorageHandler';

const { REACT_APP_API_URL } = process.env
const AUTHENTICATION_URI = '/authentication';

export interface authenticationResponse 
{
    data: UserAuthenticated;
}

/**
 * allows to manage the authentication from api
 * @param credentials 
 * @returns 
 */
export function authentication(credentials: credentialsInterface)
{
    return axios.post(REACT_APP_API_URL + AUTHENTICATION_URI, {
        email: credentials.login,
        password: credentials.password
    });
}

export function logout(): void
{
    console.log('iciiiciccici');
    StorageHandler.remove('scm_current_logged');
    document.location.href="/login";
}