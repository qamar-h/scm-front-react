import ReducerActionInterface from "../../Utils/ReducerActionInterface";
import { stateInterface } from "./state";

export default function reducer(state: stateInterface, action: ReducerActionInterface) {
    switch (action.type) {
        
        case 'SUBMITED':
            return {
                ...state,
                submited: action.value
            }

        case 'LOGGED':
            return {
                ...state,
                submited: false,
                token: action.value
            }
            
        default:
            return state;
    }
}