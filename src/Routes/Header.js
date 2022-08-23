import React,{ Component } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
import Series from '../Components/Series';
import Movies from '../Components/Movies';

export default class Header extends Component{
    render(){
        return(
            <BrowserRouter>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link>
                    </li>
                    <li><Link to='./series'> Series </Link></li>
                    <li> <Link to='./movies'>Movies</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/series' element={<Series/>} />
                <Route path='/movies' element={<Movies/>} />
            </Routes>

            </BrowserRouter>
        )
    }
}