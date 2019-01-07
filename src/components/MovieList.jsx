import React, { Component } from 'react'
import NewMovie from './NewMovie'
import { Link } from 'react-router-dom'


class MovieList extends Component {

    render() {

        let list = this.props.allMovies.map(movies => {
            return (
                <div key={movies.id} className='movieTable'>
                    <div>{movies.title}</div>
                    <div>{movies.director}</div>
                    <div>{movies.year}</div>
                    <div>{movies.my_rating}</div>
                    <div><img className='img' src={movies.poster_URL} /></div>
                    <Link to='/EditPage'>
                        <button className='edit' id={movies.id} onClick={this.props.selectMovie}>Edit</button>
                    </Link>

                    {/* <div><button onClick={() => this.deleteHandler(i)}>Delete</button></td> */}
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