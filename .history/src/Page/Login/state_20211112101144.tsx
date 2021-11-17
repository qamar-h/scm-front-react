import { useRef } from "react";

export interface stateInterface {
    submited: boolean;
    token: string;
    login: any;
    password: any;
}

export const state: stateInterface = {
    submited: false,
    token:'',
    login: useRef(''),
    password: useRef(''),
}

