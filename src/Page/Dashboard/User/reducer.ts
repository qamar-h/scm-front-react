import ReducerActionInterface from "../../../Utils/ReducerActionInterface";

export default function reducer(state: any, action: ReducerActionInterface)
{
    switch (action.type) {

        case "INIT":
            return {
                ...state,
                users: action.value,
                loading: false,
                error: null,
            }

        case "ERROR":
            return {
                ...state,
                error: action.value
            }

        default: 
            return state;
    }
}
