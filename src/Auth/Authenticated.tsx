import React, { useContext } from "react";
import { useLocation } from "react-router";
import StorageHandler from "../Utils/StorageHandler";
import Login from "../Page/Login/Login";
import Dashboard from "../Page/Dashboard/Dashboard";
import AuthContext from "../Auth/Context";

export default function Authenticated({ children }: { children: JSX.Element }) 
{
    const [ authState ] = useContext(AuthContext);
    const { token , exp} = authState;
    const location = useLocation();
 
    const isAuthenticated = (): boolean =>
    {
        if (typeof token == 'undefined' || token == '') {
            return false;
        } 

        if (typeof exp === 'undefined' || exp < (Date.now() / 1000)) {
            StorageHandler.remove('scm_current_logged');
            return false;
        }

        return true;
    }

    if(isAuthenticated() && (location.pathname == '/login' || location.pathname == '/')) {
        window.history.pushState({}, '', '/dashboard');
        return <Dashboard />;
    }

    if(!isAuthenticated()) {
        window.history.pushState({}, '', '/login');
        return <Login />;
    }

    return children;
}