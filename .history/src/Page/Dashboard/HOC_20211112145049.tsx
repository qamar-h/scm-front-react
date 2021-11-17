import React, { ReactElement } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';

export default function HOC(component: any)
{
    return (<>
    <div id="wrapper" className="wrapper bg-ash">
        
        <Header />
        
        <div className="dashboard-page-one">

            <Sidebar />

            <div className="dashboard-content-one">
        
                <component />

                <Footer />

            </div>
        </div>
    </div>
    </>)
}