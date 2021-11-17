import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOC from './HOC';

const DashboardComponent = () => {
    return (<>
        <h1>Dashboard</h1>
      </>);
}

const Dashboard  = HOC(DashboardComponent);

export default Dashboard;