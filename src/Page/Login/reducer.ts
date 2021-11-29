
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
            return {
                ...state,
                submited: false,
                currentUser: action.value,
                logged: true,
            }
        
        case 'LOGIN_FAILED':
            return {
                ...state,
                submited: false,
                error: action.value,
                logged: false,
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