import React from 'react';
import HOC from '../HOC';
import { Link } from 'react-router-dom';
import InformationTabContent from './component/InformationTabContent';
import PasswordTabContent from './component/PasswordTabContent';
import Sidebar from './component/Sidebar';
import './Profil.css';

function Profile()
{
    return (<>
        <div className="breadcrumbs-area">
            <h3>Profil</h3>
            <ul>
                <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="current">Profil</li>
            </ul>

        </div>

        <div className="row">
            <div className="col-12 col-xl-4">
                <div className="card dashboard-card-two pd-b-20">
                    <div className="card-body">
                        <Sidebar />
                    </div>
                </div>
            </div>

            <div className="col-12 col-xl-8">
                <div className="card ui-tab-card pd-b-20">
                    <div className="card-body">

                    <div className="basic-tab">
                        
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active show" data-toggle="tab" href="#information" role="tab" aria-selected="true">
                                <i className="fas fa-info-circle"></i> Informations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#password" role="tab" aria-selected="false">
                                <i className="fas fa-lock" aria-hidden="true"></i> Mot de passe</a>
                            </li>
                        </ul>
                        
                        <div className="tab-content">

                            <div className="tab-pane fade active show" id="information" role="tabpanel">
                                <InformationTabContent />
                            </div>

                            <div className="tab-pane fade" id="password" role="tabpanel">
                                <PasswordTabContent />
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default HOC(Profile);