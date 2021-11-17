import { FormEvent } from "react";
import { stateInterface } from "./state";
import { authentication } from "../../Api/Auth";

export class service {

    dispatch: any;
    state: stateInterface;

    constructor(state: stateInterface, dispatch: any) {
        this.dispatch = dispatch;
        this.state = state;
    }

    /**
     * Authentication form submit
     * @param e 
     * @returns 
     */
    submit(e: FormEvent): void
    {
        e.preventDefault();

        this.dispatch({type: "SUBMITED", value: true});

        if(!this.credentialsCompleted()) {
            this.dispatch({
                type: "ERROR", 
                value: "Credentials is empty"
            });
            return;
        }
    }

    /**
     * Verify if credentials completed
     * @returns 
     */
    private credentialsCompleted(): boolean
    {
        if(this.state.login === '' || this.state.password === '') {
            return false;
        }
        return true;
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

