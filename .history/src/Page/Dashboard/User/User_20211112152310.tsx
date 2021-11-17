import React from 'react';
import HOC from '../HOC';

function User()
{
    return (<div className="breadcrumbs-area">
        <h3>Utilisateurs</h3>
        <ul>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
        </ul>
    </div>)
}

export default HOC(User);