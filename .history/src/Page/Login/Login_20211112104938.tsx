import React, { ChangeEvent, FormEvent, useReducer } from 'react';
import { authentication, authenticationResponse } from '../../Api/Auth';
import reducer from './reducer';
import { state as initState } from './state';

export default function Login()
{
    console.log('login page rendered');
    let timer: any;
    const [state, dispatch] = useReducer(reducer, initState);
    const { submited, login, password } = state;
    
    const submit = (e: FormEvent) => {
        
        e.preventDefault();
        dispatch({type: "SUBMITED", value: true});
       
        authentication(login, password)
            .then((res: authenticationResponse) => {
                dispatch({type: "LOGGED", value: res.data.token});
            })
            .catch((error: {response: {data: {message: string}}}) => {
                console.log('une erreur', error.response.data.message)
                dispatch({type: "SUBMITED", value: false});
            });
    }

    const onChange = (e: ChangeEvent) => {
        //@ts-ignore
        const {value, name} = e.target;
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch({type:"UPDATE", value: {key: name, value}})
        }, 500);
    }

    return (<div className="login-page-wrap">
    <div className="login-page-content">
        <div className="login-box">
            <div className="item-logo">
                <img src="/assets/img/logo2.jpg" alt="scm-logo" />
            </div>
            <form className="login-form" onSubmit={(e) => submit(e) }>
                <div className="form-group">
                    <label>Login</label>
                    <input 
                        name="login"
                        onChange={(e) => onChange(e)}
                        defaultValue={state.login}
                        type="text" placeholder="Entrez votre email ou nom d'utilisateur" className="form-control" />
                    <i className="far fa-envelope"></i>
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input 
                        name="password"
                        onChange={(e) => onChange(e)}
                        defaultValue={state.password}
                        type="text" placeholder="Entrez votre mot de passe" className="form-control" />
                    <i className="fas fa-lock"></i>
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                    <a href="#" className="forgot-btn">Mot de passe oublié?</a>
                </div>
                <div className="form-group">
                    <button 
                        type="submit" 
                        className="login-btn" 
                        disabled={submited} 
                    >{submited ? 'Connexion ...' : 'Se connecter'}</button>
                </div>
            </form>
        </div>
    </div>
</div>)
}