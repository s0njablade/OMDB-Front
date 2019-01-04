import React from 'react'
import Movies from './Movies'
import NewMovie from './NewMovie'

const MovieList = (props) => {

    return (
        <div className='movieList'>
            {props.allMovies}
        </div>
    )
}

export default MovieList 