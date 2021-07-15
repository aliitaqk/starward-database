import React from 'react'

export default function Element(props) {
    return (
        <div className="element" key={props.id}>
            <h1>{props.name}</h1>
            <p>URL : {props.url}</p>
        </div>
    )
}
