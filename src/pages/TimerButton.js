import React from 'react';

function Button(props) {

    return (
        <button type="button" onClick={props.clickEvent} >{props.value}</button>
    )
}

export default Button