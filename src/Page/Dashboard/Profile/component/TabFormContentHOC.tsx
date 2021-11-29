import React, { useContext, useEffect, useState } from 'react'
import { patchUser } from '../../../../Api/User';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../../Auth/Context';
import Alert from '../../../../Utils/Alert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const TabFormContentHOC = (Component: React.ComponentType) => (props: any) => 
{
    const [ authState, authDispatch ] = useContext(AuthContext);
    const form = useForm(), { handleSubmit } = form;
    const [ localState, setLocalState ] = useState({
        loading: false,
        success: false,
        error: null,
    });

    useEffect(() => {
        
        let timer = setTimeout(() => {
            localState.success && setLocalState({...localState, success: false});
        }, 2000);

        return function() {
            clearTimeout(timer);
        }

    }, [localState.success])

    const onSubmit = (data: any) => {

        let { password } = data;

        if (typeof password !== "undefined") {
            data = {
                plainPassword: password
            };
        }

        setLocalState({...localState, loading: true});
        patchUser(authState.ui, data)
            .then(() => {
                typeof password == "undefined" && authDispatch({type: "UPDATE", value: {
                    ...authState, 
                    ...data.person,
                    fullname: data.person.firstname + ' ' + data.person.lastname
                }})
                setLocalState({...localState, loading: false, success: true});
            })
            .catch((error: any) => console.log(error))
    }

    return (<form className="new-added-form" onSubmit={handleSubmit(onSubmit)} >
            <div className="row">

                <Component 
                    {...props} 
                    form={form}
                />

                <div className="col-12 form-group mg-t-8">
                    {localState.success && <Alert text="Mise à jour réussie" type="success"/>}

                    {localState.loading ?  
                        <Skeleton style={style.input} baseColor={"#ff9d01"}/> : 
                        <button type="submit" 
                            className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark" 
                            style={{width: "200px"}}
                        >Mettre à jour
                        </button>}
                </div>
            </div>
    </form>)
}

const style = {
    input: {
        height: 50,
        width:200
    }
}

export default TabFormContentHOC;