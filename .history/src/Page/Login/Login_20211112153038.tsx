import React, { useReducer, useEffect } from 'react';
import { useForm } from "react-hook-form";
import reducer from './reducer';
import service from './service';
import { state as initState } from './state';
import credentialsInterface from './credentialsInterface';
import { useNavigate } from "react-router-dom";

import logo from '../../logo2.jpg';

const REDIRECT_URI_AFTER_LOGIN = 
    process.env.REACT_APP_REDIRECT_URI_AFTER_LOGIN_SUCCESS !== undefined 
    ?  process.env.REACT_APP_REDIRECT_URI_AFTER_LOGIN_SUCCESS : '/';

export default function Login()
{   
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [state, dispatch] = useReducer(reducer, initState);
    const loginService = new service(state, dispatch, navigate);

    const onSubmit = (data: credentialsInterface) => loginService.submit(data);

    useEffect(() => {
        localStorage.getItem('token') && navigate(REDIRECT_URI_AFTER_LOGIN);
    },[])
    
    return (<div className="login-page-wrap">
        <div className="login-page-content">
            <div className="login-box">
                <div className="item-logo">
                    <img src={logo} alt="scm-logo" />
                </div>
                
                {state.error !== null && <div className="alert alert-danger">
                    {state.error}
                </div>}

                <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        <label>Login</label>
                        <input 
                            {...register('login')}
                            type="text" 
                            placeholder="Entrez votre email ou nom d'utilisateur" 
                            className="form-control" />
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input 
                            {...register('password')}
                            type="password" 
                            placeholder="Entrez votre mot de passe" 
                            className="form-control" />
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <a href="#" className="forgot-btn">Mot de passe oublié?</a>
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="login-btn" 
                            disabled={state.submited} 
                        >{state.submited ? 'Connexion ...' : 'Se connecter'}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}