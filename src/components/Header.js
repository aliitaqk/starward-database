import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <h1 class="title">Star Wars Database</h1>
            <ul id="navlink">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people">Peoples</Link></li>
                <li><Link to="/planet">Planets</Link></li>
                <li><Link to="/vehicle">Vehicles</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </>
    )
}
