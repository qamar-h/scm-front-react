import UserAuthenticated from "../../Auth/UserAuthenticated";

export interface stateInterface {
    submited: boolean;
    error: string | null;
    logged: false;
    currentUser: UserAuthenticated | null
}

export const state: stateInterface = {
    submited: false,
    error: null,
    logged: false,
    currentUser: null,
}

