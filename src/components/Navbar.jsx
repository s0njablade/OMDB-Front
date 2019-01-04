import React from 'react'
import MovieList from './MovieList'
import NewMovie from './NewMovie'

const Navbar = (props) =>{
    return(   
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#">OMDB</a>
                <div className='item-list'>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Submit</a>
                        </li>
                    </ul>
                </div>
                <div className="searchField">
                    <form className="form-inline">
                        <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button type="button" className="btn btn-secondary btn-sm">Search</button>
                    </form>
                </div>
            </nav>    
    )

}
export default Navbar