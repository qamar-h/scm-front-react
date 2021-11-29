import ReducerActionInterface from "../Utils/ReducerActionInterface";
import StorageHandler from "../Utils/StorageHandler";
import UserAuthenticated from "./UserAuthenticated";

export default function reducer(state: UserAuthenticated, action: ReducerActionInterface)
{
    switch (action.type) {
        
        case 'AUTHENTICATED':

            StorageHandler.persist('scm_current_logged', action.value);

            return {
                ...state,
                ...action.value,
            }

        case 'UPDATE':  

            StorageHandler.persist('scm_current_logged', action.value);

            return {
                ...state,
                ...action.value,
            }

        default: 
            return state;
    }
}