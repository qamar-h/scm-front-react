import React, { useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Sidebar from './component/Sidebar';

function HOC(Component: React.ComponentType) {

}

/*
const HOC = (Component: React.ComponentType) => (props: any) => 
{
    const toto = useState('');

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