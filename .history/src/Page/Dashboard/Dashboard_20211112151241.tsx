import React from "react";
import HOC from './HOC';

function DashboardComponent() {
  return (<>
      <div className="breadcrumbs-area">
          <h3>Dashboard</h3>
          <ul>
              <li>
                  <a href="index.html">Dashboard</a>
              </li>
          </ul>
      </div>
  </>);
}

export default HOC(DashboardComponent);