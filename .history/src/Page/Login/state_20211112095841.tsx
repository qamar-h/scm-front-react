export interface stateInterface {
    submited: boolean;
    token: string;
    login: string;
    password: string;
}

export const state: stateInterface = {
    submited: false,
    token:'',
    login: '',
    password: '',
}

