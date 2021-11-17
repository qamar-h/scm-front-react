import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOC from './HOC';

function Dashboard()
{
    return (<>
        <h1>Dashboard</h1>
      </>);
}

export default HOC(Dashboard());