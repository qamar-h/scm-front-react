import React from "react";
import { useLocation } from "react-router";
import StorageHandler from "../Utils/StorageHandler";
import Login from "./Login/Login";
import Dashboard from './Dashboard/Dashboard'

export default function Authenticated({ children }: { children: JSX.Element }) 
{
    const location = useLocation();
    const isAuthenticated = StorageHandler.get('token') !== null;

    if(isAuthenticated && location.pathname == '/login') {
        window.history.pushState({}, '', '/dashboard');
        return <Dashboard />;
    }

    if(!isAuthenticated) {
        window.history.pushState({}, '', '/login');
        return <Login />;
    }

    return children;
}