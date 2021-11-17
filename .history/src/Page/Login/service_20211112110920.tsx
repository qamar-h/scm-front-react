import { ChangeEvent, FormEvent } from "react";
import { stateInterface } from "./state";
import { authentication, authenticationResponse } from "../../Api/Auth";

export class service {

    timer: any;
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

        authentication(this.state.login, this.state.password)
            .then((res: authenticationResponse) => {
                this.dispatch({type: "LOGIN_SUCCESS", value: res.data.token});
            })
            .catch((error: {response: {data: {message: string}}}) => {
                this.dispatch({type: "LOGIN_FAILED", value: error.response.data.message});
            });

    }

    onChange(e: ChangeEvent): void
    {
        //@ts-ignore
        const {value, name} = e.target;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            dispatch({type:"UPDATE", value: {key: name, value}})
        }, 500);
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



const onChange = (e: ChangeEvent) => {
    //@ts-ignore
    const {value, name} = e.target;
    clearTimeout(timer);
    timer = setTimeout(() => {
        dispatch({type:"UPDATE", value: {key: name, value}})
    }, 500);
}
