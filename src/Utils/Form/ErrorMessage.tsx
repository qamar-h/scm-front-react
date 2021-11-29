import React from 'react';

export default function ErrorMessage(props: {message: string})
{
    const { message } = props;
    return <span style={style.span}>{message}</span>
}

const style = {
    span: {
        color: "red",
    }
}