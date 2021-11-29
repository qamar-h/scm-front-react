import React from 'react'

export default function Alert(props: {
        type: string | undefined, 
        text: string | undefined
}) {
    let {type, text} = props;
    
    typeof type == 'undefined' && (type = "success");

    typeof text == 'undefined' && (text = "successfully")
    
    const className = 'alert alert-' + type;
    
    return (<div className={className}>{text}</div>)
}