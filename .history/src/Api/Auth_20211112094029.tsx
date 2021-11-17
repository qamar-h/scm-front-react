import axios from 'axios';

const AUTHENTICATION_URI = 'http://localhost:3001/api/authentication';

interface credentials {
    email: string;
    password: string;
}

export function authentication(credentials: credentials) 
{
    console.log(credentials);
    //return axios.post(AUTHENTICATION_URI, credentials);
}