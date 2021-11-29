import React, { useEffect, useReducer } from 'react';
import HOC from '../HOC';
import { allUsers } from '../../../Api/User';
import EntityResponseInterface from '../../../Api/EntityResponseInterface';
import UserInterface from './UserInterface';
import { Link } from 'react-router-dom';
import SingleUser from './component/SingleUser';
import reducer from './reducer';
import { state as initState } from './state';
import Filters from './component/Filters';
import Alert from '../../../Utils/Alert';
import Loading from './component/Loading';

function User()
{
    console.log('user rendered');

    const [state, dispatch] = useReducer(reducer, initState);
    
    useEffect(() => {
        allUsers()
            .then((res: EntityResponseInterface) => 
                dispatch({type: "INIT", value: res.data['hydra:member']})
            )
            .catch((error: any) => 
                dispatch({type:"ERROR", value: error.message})
            );
    }, []);
    
    return (<>
        <div className="breadcrumbs-area">
            <h3>Utilisateurs</h3>
            <ul>
                <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="current">Utilisateurs</li>
            </ul>

            <Link
                to={"/dashboard/users/create"}
                className="fw-btn-fill btn-gradient-yellow entity-adding-button"
            ><i className="fa fa-plus"></i> Nouvel utilisateur</Link>
        </div>

        {state.loading && <Loading />}

        {!state.loading && state.error !== null && <Alert type={"danger"} text={state.error}/>}

        {!state.loading && state.error === null && <div>
            <div  className="card height-auto">
                <div className="card-body" style={{padding: "1.25rem"}} >
                    <Filters dispatch={dispatch} />
                </div>
            </div>

            <div className={"row"}>
                {state.users.length === 0 && <div className={"col-md-12"} >
                    <Alert type="info" text="Aucun utilisateur trouvé." />
                </div>}
                {state.users.map((user: UserInterface) => <SingleUser key={user.id} user={user}/>)}
            </div>
        </div>}

    </>)
}

export default HOC(User);