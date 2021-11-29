import React, { useContext } from 'react';
import AuthContext from '../../../../Auth/Context';
import ErrorMessage from '../../../../Utils/Form/ErrorMessage';
import TabFormContentHOC from './TabFormContentHOC';

function InformationTabContent(props: any)
{   
    const [ authState ] = useContext(AuthContext);
    const { register, formState: { errors } } = props.form;
    
    return (<>
        <div className="col-12-xxxl col-lg-6 col-12 form-group">
            <label>Nom</label>
            <input
                defaultValue={authState?.lastname}
                {...register('person.lastname', { required: true })}
                type="text" placeholder="" className="form-control" 
            />
            {errors.person?.lastname?.type === 'required' 
                && <ErrorMessage message="Le nom ne peut être vide." />}
        </div>
        <div className="col-12-xxxl col-lg-6 col-12 form-group">
            <label>Prénom</label>
            <input 
                defaultValue={authState?.firstname}
                {...register('person.firstname', { required: true })}
                type="text" placeholder="" className="form-control" 
            />
            {errors.person?.firstname?.type === 'required' 
                && <ErrorMessage message="Le prénom ne peut être vide." />}
        </div>
    </>)
}

export default TabFormContentHOC(InformationTabContent);