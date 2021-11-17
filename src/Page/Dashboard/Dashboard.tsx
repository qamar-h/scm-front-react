import React from "react";
import HOC from './HOC';

function Dashboard() {
  return (<>
      <div className="breadcrumbs-area">
          <h3>Dashboard</h3>
          <ul>
              <li>
                  <a href="/">Dashboard</a>
              </li>
          </ul>
      </div>
  </>);
}

const D = HOC(Dashboard)

export default D;