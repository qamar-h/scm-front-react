import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar()
{
    console.log('sidebar rendered');

    return (<div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
        <div className="mobile-sidebar-header d-md-none">
            <div className="header-logo">
                <a href="index.html"><img src="img/logo1.png" alt="logo" /></a>
            </div>
        </div>
        <div className="sidebar-menu-content">
            <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                <li className="nav-item">
                    <Link to={"/dashboard"} className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></Link>
                </li>
                <li className="nav-item">
                    <Link to={"/dashboard/users"} className="nav-link"><i className="flaticon-multiple-users-silhouette"></i><span>Utilisateurs</span></Link>
                </li>
            </ul>
        </div>
    </div>);
}