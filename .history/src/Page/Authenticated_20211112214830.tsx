import React from "react";
import { Navigate } from "react-router-dom";
import StorageHandler from "../Utils/StorageHandler";

export default function Authenticated({ children }: { children: JSX.Element }) 
{
    if(StorageHandler.get('token') === null) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}