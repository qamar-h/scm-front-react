import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import EntityResponseInterface from '../../../../Api/EntityResponseInterface';
import { allUsers } from "../../../../Api/User";
import FiltersInterface from './FiltersInterface';
import Skeleton from 'react-loading-skeleton';

function Filtres(props: { dispatch: CallableFunction })
{   
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data: FiltersInterface) => { 
        setLoading(true);
        allUsers(data)
            .then((res: EntityResponseInterface) => 
                props.dispatch({type: "INIT", value: res.data['hydra:member']})
            )
            .catch((error: any) => console.log(error))
            .finally(() => setLoading(false));
    };

    return (<form onSubmit={handleSubmit(onSubmit)} role="form">
        <div className="row gutters-8">
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                    {...register("person.lastname")}
                    type="text" placeholder="Nom ..." className="form-control" />
            </div>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                    {...register("person.firstname")}
                    type="text" placeholder="Prénom ..." className="form-control" />
            </div>
            <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                <input
                    {...register("email")}
                    type="text" placeholder="Email ..." className="form-control" />
            </div>
            
            <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                {loading ? 
                    <Skeleton style={style.button} baseColor={"#ff9d01"}/> : 
                    <button
                        type="submit" 
                        className="fw-btn-fill btn-gradient-yellow"
                    ><i className="fa fa-search"></i></button>}
            </div>
        </div>
    </form>)
}

export default React.memo(Filtres);

const style = {
    button: {
        height: 45,
        display: "block",
    }
}
