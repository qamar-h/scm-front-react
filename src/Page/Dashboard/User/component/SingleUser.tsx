import React from 'react';

import UserInterface from '../UserInterface';

export default function SingleUser(props: {user: UserInterface})
{
    const { user } = props;
   
    return (<div  className="col-xl-4 col-sm-6 col-12" >
            <div className="dashboard-summery-one mg-b-20">
                <div className="row align-items-center">

                    <div className="col-2">
                        <div className="item-icon bg-light-green " style={{overflow: "hidden"}}>
                            <img src={process.env.REACT_APP_API_FILE_PATH + user.avatar} alt={user.person.lastname} style={{width:"100%", height:"100%"}} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="item-content">
                            <p>#{user.id}</p>
                            <div className="item-number"><span className="counter" >{user.person.firstname} {user.person.lastname.toUpperCase()}</span>
                            </div>
                            <div className="item-title">{user.email}</div>
                        </div>
                    </div>

                    <div className="col-12">
                        <br />
                        <div className="ui-btn-wrap" style={{float:"right"}}>
                            <ul>
                            <li><button
                                title="Voir"
                                type="button" className="btn-fill-md radius-4 text-dodger-blue border-dodger-blue"><i className="far fa-eye"></i></button></li>
                            <li><button
                                title="Editer"
                                type="button" className="btn-fill-md radius-4 text-dark-pastel-green border-dark-pastel-green"><i className="fas fa-pencil-alt"></i></button></li>
                            <li><button
                                title="Supprimer"
                                type="button" className="btn-fill-md radius-4 text-orange-red border-orange-red"><i className="fas fa-trash"></i></button></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>)
}