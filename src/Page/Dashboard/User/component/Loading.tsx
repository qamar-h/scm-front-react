import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading()
{
    return (<>  
        <div  className="card height-auto">
            <div className="card-body" style={{padding: "1.25rem"}} >
                <div className="row">
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <Skeleton style={style.input} />
                    </div>
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <Skeleton style={style.input} />
                    </div>
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <Skeleton style={style.input} />
                    </div>

                    <div className="col-2-xxxl col-xl-2 col-lg-2 col-12 form-group">
                        <Skeleton style={style.input} baseColor={"#ff9d01"}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <UserLoading />
            <UserLoading />
            <UserLoading />
            <UserLoading />
            <UserLoading />
            <UserLoading />
        </div>
    </>)
}

function UserLoading() {
    return ( <div  className="col-xl-4 col-sm-6 col-12" >
    <div className="dashboard-summery-one mg-b-20">
        <div className="row align-items-center">

            <div className="col-2">
                <div className="item-icon bg-light-green " style={{overflow: "hidden"}}>
                </div>
            </div>
            <div className="col-10">
                <div className="item-content">
                    <p><Skeleton style={{width:20}} /></p>
                    <div className="item-number"><span className="counter" ><Skeleton style={{width:200}} /></span>
                    </div>
                    <div className="item-title"><Skeleton style={{width:100}} /></div>
                </div>
            </div>

            <div className="col-12">
                <br />
                <div className="ui-btn-wrap" style={{float:"right"}}>
                    <ul>
                    <li><button
                        disabled
                        style={{cursor:"not-allowed"}}
                        type="button" className="btn-fill-md radius-4 text-dodger-blue border-dodger-blue"><i className="far fa-eye"></i></button></li>
                    <li><button
                        disabled
                        style={{cursor:"not-allowed"}}
                        type="button" className="btn-fill-md radius-4 text-dark-pastel-green border-dark-pastel-green"><i className="fas fa-pencil-alt"></i></button></li>
                    <li><button
                        disabled
                        style={{cursor:"not-allowed"}}
                        type="button" className="btn-fill-md radius-4 text-orange-red border-orange-red"><i className="fas fa-trash"></i></button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</div>)
}

const style = {
    input: {
        height: 45,
    }
}