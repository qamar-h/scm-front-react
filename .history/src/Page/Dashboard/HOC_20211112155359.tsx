import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import StorageHandler from '../../Utils/StorageHandler';
import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';


function HOC()

/*
const HOC = (Component: React.ComponentType) => (props: any) => 
{
    return (<div id="wrapper" className="wrapper bg-ash">
            <Header />
            <div className="dashboard-page-one">
                <Sidebar />
                <div className="dashboard-content-one">
                    <Component {...props} />
                    <Footer />
                </div>
            </div>
        </div>)

}*/

export default HOC;