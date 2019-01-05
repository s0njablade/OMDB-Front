import React from 'react'
import Movies from './Movies'
import NewMovie from './NewMovie'
import { Link } from 'react-router-dom'



const MovieList = (props) => {



    return (
        <table className='movieList container'>
            {/* <div className='movieHeader'>
            </div>
            <div className='list'> */}
                {props.allMovies}
                {props.deleteHandler}
            {/* </div> */}
        </table>
    )
}

export default MovieList 