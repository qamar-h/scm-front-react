import React from "react";
import HOC from './HOC';

const DashboardComponent = () => {
    return (<>
        <h1>Dashboard</h1>
      </>);
}

const Dashboard  = HOC(DashboardComponent);

export default Dashboard;