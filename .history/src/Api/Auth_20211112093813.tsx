import axios from 'axios';

const AUTHENTICATION_URI = 'http://localhost:3001/api/authentication';

interface credentials {
    login: string;
    password: string;
}

export function authentication(credentials: credentials) {
    return axios.post()
}