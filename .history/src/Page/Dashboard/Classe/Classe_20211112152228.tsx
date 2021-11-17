import React from "react";
import HOC from "../HOC";

function Classe()
{
    return (<div className="breadcrumbs-area">
        <h3>Classes</h3>
        <ul>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
        </ul>
    </div>)
}

export default HOC(Classe);