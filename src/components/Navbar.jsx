import React from 'react'
import MovieList from './MovieList'
import NewMovie from './NewMovie'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (


        <nav className="navbar sticky-top navbar-dark bg-dark">
            <a className="navbar-brand" href="#">OMDB</a>
            <div className='item-list'>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/MovieList">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/NewMovie">Submit Movie</Link>
                    </li>
                </ul>
            </div>
            <div className="searchField">
                <form className="form-inline">
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <button type="button" className="btn btn-secondary btn-sm">Search</button>
                </form>
            </div>
        </nav>

    )

}
export default Navbar