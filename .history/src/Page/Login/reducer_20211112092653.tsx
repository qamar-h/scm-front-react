export default function reducer(state: any, action: any) {
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