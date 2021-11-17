import { useRef } from "react";

export interface stateInterface {
    submited: boolean;
    token: string;
    login: string;
    password: string;
    error: ?string;
}

export const state: stateInterface = {
    submited: false,
    token:'',
    login: '',
    password: '',
}

