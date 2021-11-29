import React, { useContext } from 'react';
import AuthContext from '../../../../Auth/Context';

export default function Sidebar()
{
    const [ authState ] = useContext(AuthContext);

    return (<div className="profile-informations">
                <div className="item-icon bg-light-green profil-image">
                    <img src={process.env.REACT_APP_API_FILE_PATH + authState.avatar} />
                </div>
                <h3>{authState?.fullname} ({authState.age + ' an' + (authState.age > 1 && 's')})</h3>
                <p>{authState?.email}</p>
                <span className="badge badge-primary">ROLE</span>
            </div>);
}