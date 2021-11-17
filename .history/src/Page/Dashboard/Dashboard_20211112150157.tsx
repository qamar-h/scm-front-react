import React from "react";
import HOC from './HOC';

function DashboardComponent() {
  return (<>
    <h1>Dashboard</h1>
  </>);
}

export default HOC(DashboardComponent);