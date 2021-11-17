import { stateInterface } from "./state";
import { authentication, authenticationResponse } from "../../Api/Auth";
import ErrorResponse from "../../Api/ErrorResponse";
import credentialsInterface from "./credentialsInterface";

const CREDENTIAL_EMPTY_ERROR = "Credentials is empty";
const REDIRECT_URI_AFTER_LOGIN_SUCCESS = "/dashboard";

export default class service {

    navigate: any;
    dispatch: any;
    state: stateInterface;

    constructor(state: stateInterface, dispatch: any, navigate: any) {
        this.dispatch = dispatch;
        this.state = state;
        this.navigate = navigate;
    }

    /**
     * Authentication form submit
     * @param e 
     * @returns 
     */
    public submit(data: credentialsInterface): void
    {
        this.dispatch({type: "SUBMITED", value: true});

        if(!this.credentialsCompleted(data)) {
            this.dispatch({
                type: "ERROR", 
                value: CREDENTIAL_EMPTY_ERROR
            });
            return;
        }

        authentication(data)
            .then((res: authenticationResponse) => {
                this.dispatch({type: "LOGIN_SUCCESS", value: res.data.token});
                this.navigate('/dashboard');
            })
            .catch((error: ErrorResponse) => {
                this.dispatch({type: "LOGIN_FAILED", value: error.response.data.message});
            });

    }


    /**
     * Verify if credentials completed
     * @returns 
     */
    private credentialsCompleted(data: credentialsInterface): boolean
    {
        if(data.login === '' || data.password === '') {
            return false;
        }
        return true;
    }
}

