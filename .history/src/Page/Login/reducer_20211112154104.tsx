import StorageHandler from "../../Utils/StorageHandler";
import ReducerActionInterface from "../../Utils/ReducerActionInterface";
import { stateInterface } from "./state";

export default function reducer(state: stateInterface, action: ReducerActionInterface) {
    switch (action.type) {
        
        case 'SUBMITED':
            return {
                ...state,
                submited: action.value,
                error: null,
            }

        case 'LOGIN_SUCCESS':

            StorageHandler.persist('token', action.value);
            
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
            
        case 'ERROR':
            return {
                ...state,
                error: action.value,
                submited: false,
            }

        default:
            return state;
    }
}