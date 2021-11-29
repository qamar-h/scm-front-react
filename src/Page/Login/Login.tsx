import React, { useContext, useEffect, useReducer } from 'react';
import { useForm } from "react-hook-form";
import reducer from './reducer';
import service from './service';
import { state as initState } from './state';
import credentialsInterface from './credentialsInterface';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AuthContext from '../../Auth/Context';
import logo from '../../logo2.jpg';
const REDIRECT_URI_AFTER_LOGIN_SUCCESS = "/dashboard";

export default function Login()
{   
    const { register, handleSubmit } = useForm();
    const [authState, authDispatch] = useContext(AuthContext);
    //@ts-ignore
    const [state, dispatch] = useReducer(reducer, initState);
    const loginService = new service(state, dispatch);
    
    const onSubmit = (data: credentialsInterface) => loginService.submit(data);

    useEffect(() => {
        if (state.logged) {
            authDispatch({type: "AUTHENTICATED", value: state.currentUser});
            document.location.href=REDIRECT_URI_AFTER_LOGIN_SUCCESS
        }
    }, [state.logged])

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
                        <label>Email</label>
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
                        {state.submited ? 
                            <Skeleton 
                                style={style.submitButton} 
                                baseColor={style.submitButtonBackgroundColor}
                            /> : 
                            <SubmitButton text={"Se connecter"} />}
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

const SubmitButton = (props: {text: string}) => 
{
    return <button 
        type="submit" 
        className="login-btn" 
    >{props.text}</button>
}

const style = {
    submitButton: {
        height:60,
    },
    submitButtonBackgroundColor: "#083d6b"
}