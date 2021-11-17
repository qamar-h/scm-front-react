import React from "react";
import { useLocation } from "react-router";
import StorageHandler from "../Utils/StorageHandler";
import Login from "./Login/Login";

export default function Authenticated({ children }: { children: JSX.Element }) 
{
    const location = useLocation();
    const isAuthenticated = StorageHandler.get('token') === null;

    if(StorageHandler.get('token') === null) {
        window.history.pushState({}, '', '/login');
        return <Login />;
    }

    return children;
}