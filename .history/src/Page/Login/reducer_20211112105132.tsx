import { LocalStoragePersister } from "../../Utils/LocalStoragePersister";
import ReducerActionInterface from "../../Utils/ReducerActionInterface";
import { stateInterface } from "./state";

export default function reducer(state: stateInterface, action: ReducerActionInterface) {
    switch (action.type) {
        
        case 'SUBMITED':
            return {
                ...state,
                submited: action.value
            }

        case 'LOGIN_SUCCESS':

            LocalStoragePersister.persist('token', action.value);
            
            return {
                ...state,
                submited: false,
                token: action.value
            }
        
        case 'LOGIN_FAILED':
            return {
                ...state,
                submited: false,
                error: action.value
            }
        
        case 'UPDATE':
            return {
                ...state,
                [action.value.key]: action.value.value
            }

        default:
            return state;
    }
}