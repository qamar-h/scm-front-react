import { stateInterface } from "./state";

export default function reducer(state: stateInterface, action: any) {
    switch (action.type) {
        
        case 'SUBMITED':
            return {
                ...state,
                submited: action.value
            }
        
        default:
            return state;
    }
}