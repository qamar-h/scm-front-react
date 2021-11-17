import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Dashboard()
{
    return (<>
        <h1>Dashboard</h1>
      </>);
}

function Users()
{
    return <h2>Users</h2>
}

function Classes()
{
    return <h2>Classes</h2>
}