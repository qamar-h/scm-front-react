import React from "react";
import StorageHandler from "../Utils/StorageHandler";
import Login from "./Login/Login";

export default function Authenticated({ children }: { children: JSX.Element }) 
{
    console.log(children);
    
    if(StorageHandler.get('token') === null) {
        window.history.pushState({}, '', '/login');
        return <Login />;
    }

    return children;
}