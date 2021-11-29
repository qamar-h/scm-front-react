import UserInterface from "./UserInterface";

export interface stateInterface {
    users: UserInterface[];
    page: number;
    loading: boolean;
    error: string | null;
}

export const state: stateInterface = {
    users: [],
    page: 1,
    loading: true,
    error: null,
}
