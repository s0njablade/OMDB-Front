import React, { Component } from 'react'
import NewMovie from './NewMovie'
import { Link } from 'react-router-dom'


class MovieList extends Component {

    render() {
        let list = this.props.allMovies.map(movies => {
            return (
                <div key={movies.id} className='movieTable'>
                    <div className='tableRow'>{movies.title}</div>
                    <div className='tableRow'>{movies.director}</div>
                    <div className='tableRow'>{movies.year}</div>
                    <div className='tableRow'>{movies.my_rating}</div>
                    <div className='tableRow'><img className='img' src={movies.poster_URL} /></div>
                    <Link to='/EditPage'>
                        <button className='tableRow edit' id={movies.id} onClick={this.props.selectMovie}>Edit</button>
                    </Link>
                    <button className='tableRow delete' id={movies.id} onClick={this.props.deleteMovie}>Delete</button>
                </div>
            )
        })

        return (
        <div className='otherBg'>
            <div className='tableList'>
                {list}
            </div>
        </div>
        )
    }
}
export default MovieList 