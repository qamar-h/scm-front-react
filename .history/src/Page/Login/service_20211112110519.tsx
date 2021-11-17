import { FormEvent } from "react";
import { stateInterface } from "./state";

export class service {

    dispatch: any;
    state: stateInterface;

    constructor(state: stateInterface, dispatch: any) {
        this.dispatch = dispatch;
    }

    submit(e: FormEvent): void
    {
        e.preventDefault();

        this.dispatch({type: "SUBMITED", value: true});
    }

    private credentialsCompleted() {

    }
    
}


const submit = (e: FormEvent) => {
        
    e.preventDefault();
    dispatch({type: "SUBMITED", value: true});

    if(!credentialsCompleted()) {
        dispatch({
            type: "ERROR", 
            value: "Credentials is empty"
        });
        return;
    }
   
    authentication(login, password)
        .then((res: authenticationResponse) => {
            dispatch({type: "LOGIN_SUCCESS", value: res.data.token});
        })
        .catch((error: {response: {data: {message: string}}}) => {
            dispatch({type: "LOGIN_FAILED", value: error.response.data.message});
        });
}

const onChange = (e: ChangeEvent) => {
    //@ts-ignore
    const {value, name} = e.target;
    clearTimeout(timer);
    timer = setTimeout(() => {
        dispatch({type:"UPDATE", value: {key: name, value}})
    }, 500);
}

const credentialsCompleted = () => {

    if(login === '' || password === '') {
        return false;
    }

    return true;
}