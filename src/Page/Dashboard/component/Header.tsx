import React, { useContext } from 'react';
import logo from '../../../logo1.jpg';
import { logout } from '../../../Api/Auth';
import { Link } from 'react-router-dom';
import AuthContext from "../../../Auth/Context";

export default function Header()
{
    console.log('header rendered');

    const [ authState ] = useContext(AuthContext);

    const getUserData = (dataKey: string) => {
        
        const { token } = authState;
        
        if (typeof token === 'undefined' || token == '') {
            return '';
        }

        //@ts-ignore
        return authState[dataKey] ?? '';
    }

    return (<div className="navbar navbar-expand-md header-menu-one bg-light">
        <div className="nav-bar-header-one">
            <div className="header-logo">
                <Link to={"/dashboard"}>
                    <img src={logo} alt="scm-logo" />
                </Link>
            </div>
            <div className="toggle-button sidebar-toggle">
                <button type="button" className="item-link">
                    <span className="btn-icon-wrap">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
        </div>
        <div className="d-md-none mobile-nav-bar">
        <button className="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                <i className="far fa-arrow-alt-circle-down"></i>
            </button>
            <button type="button" className="navbar-toggler sidebar-toggle-mobile">
                <i className="fas fa-bars"></i>
            </button>
        </div>
        <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
            <ul className="navbar-nav">
            </ul>
            <ul className="navbar-nav">
                <li className="navbar-item dropdown header-admin">
                    <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        <div className="admin-title">
                            <h5 className="item-title">{getUserData('fullname')}</h5>
                            <span>{getUserData('email')}</span>
                        </div>
                        <div className="admin-img">
                            <img src={process.env.REACT_APP_API_FILE_PATH + authState.avatar} alt={getUserData('fullname')} />
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="item-header">
                            <h6 className="item-title">{getUserData('fullname')}</h6>
                        </div>
                        <div className="item-content">
                            <ul className="settings-list">
                                <li>
                                    <Link to={"/dashboard/profil"}>
                                        <i className="flaticon-user"></i>Mon profil
                                    </Link>
                                </li>
                                <li>
                                    <a onClick={() => logout() }><i className="flaticon-turn-off"></i>Déconnexion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>);
}