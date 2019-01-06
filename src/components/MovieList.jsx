import React from 'react'
import Movies from './Movies'
import NewMovie from './NewMovie'
import { Link } from 'react-router-dom'



const MovieList = (props) => {

    return (
        <table className='movieList'>
            <thead className='movieHeader'>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody className='list'>
                {props.allMovies}
                {props.deleteHandler}
            </tbody>
        </table>
    )
}

export default MovieList 