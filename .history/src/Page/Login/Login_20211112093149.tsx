import React, { FormEvent, useReducer } from 'react';
import reducer from './reducer';
import { state as initState } from './state';

export default function Login()
{
    const [state, dispatch] = useReducer(reducer, initState);
    const {} = state;

    const submit = (e: FormEvent) => {
        console.log(e);
        e.preventDefault();
       dispatch({type: "SUBMITED", value: true});
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
                    <input type="text" placeholder="Entrez votre email ou nom d'utilisateur" className="form-control" />
                    <i className="far fa-envelope"></i>
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="text" placeholder="Entrez votre mot de passe" className="form-control" />
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