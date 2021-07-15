import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Element from './Element'

export default function ListElements(props) {

    const [elements, setElement] = useState([])
    const [previous, setPrevious] = useState("")
    const [next, setNext] = useState("")
    const [type] = useState(props.type)

    useEffect(() => {
        const url = "https://swapi.dev/api/".concat(type);
        axios.get(url).then(response => {
            setElement(response.data.results);
            setNext(response.data.next);
            setPrevious(response.data.previous)
        })
    }, [type])

    function goNext() {
        axios.get(next).then(response => {
            setElement(response.data.results);
            setNext(response.data.next);
            setPrevious(response.data.previous)
        })
    }
    function goPrevious() {
        axios.get(previous).then(response => {
            setElement(response.data.results);
            setNext(response.data.next);
            setPrevious(response.data.previous)
        })
    }

    return (
        <div>
            <div id="nav-button">
                { previous != null ? <button onClick={goPrevious}>Previous</button> : <span>Previous</span> }
                { next != null ? <button onClick={goNext}>Next</button> : <span>Next</span> }
            </div>

            <div className="element-grid">
                {elements.map(element => <Element key={element.id} name={element.name} url={element.url} />)}
            </div>
            
        </div>
    )
}
