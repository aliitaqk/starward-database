import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import People from './Pages/People';
import Planets from './Pages/Planets';

export default function App() {
    return (
        <BrowserRouter>
            <div id="main">
                <Header />
                <Route path="/" component={ Home } exact />
                <Route path="/people" component={ People } />
                <Route path="/planet" component={ Planets } />
                <Route path="/about" component={ About } />
            </div>
        </BrowserRouter>
    )
}
