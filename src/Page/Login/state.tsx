export interface stateInterface {
    submited: boolean;
    token: string;
    login: string;
    password: string;
    error: string | null;
}

export const state: stateInterface = {
    submited: false,
    token:'',
    login: '',
    password: '',
    error: null,
}

