import React from 'react';
import ErrorMessage from '../../../../Utils/Form/ErrorMessage';
import TabFormContentHOC from './TabFormContentHOC';

function PasswordTabContent(props: any)
{
    const { register, formState: { errors }, watch } = props.form;
    const password = watch("password", "");

    return (<>
        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                <label>Nouveau mot de passe</label>
                <input 
                    {...register('password', { 
                            required: "Le mot de passe ne peut être vide",
                            minLength: {
                                value: 8,
                                message: "Le mot de passe doit contenir minimum 8 caractères"
                            },
                    })}
                    type="password" placeholder="" className="form-control" 
                />
                {errors?.password && <ErrorMessage message={errors.password.message} />}
        </div>
        
        <div className="col-12-xxxl col-lg-6 col-12 form-group">
            <label>Confirmer le mot de passe</label>
            <input 
                {...register('password_confirmation', {
                    validate: (value: any) => 
                        value === password || "La confirmation du mot de passe ne correspond pas"
                })}
                type="password" placeholder="" className="form-control" 
            />
            {errors?.password_confirmation && <ErrorMessage message={errors.password_confirmation.message} />}
        </div>
    </>);
}

export default TabFormContentHOC(PasswordTabContent)
