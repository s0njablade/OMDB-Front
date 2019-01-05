import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import NewMovie from './components/NewMovie'
import { Route, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            movies: [],
            title: '',
            director: '',
            year: 0,
            rating: 0,
            poster: ''
        }
    }

    componentDidMount() {
        fetch('https://omdb-son.herokuapp.com/')
            .then(response => response.json())
            .then(movies => this.setState({ movies }))
        console.log('movies', this.state.movies)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://omdb-son.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application-json',
            },
            body: JSON.stringify({
                movies: this.state.title,
                director: this.state.director,
                year: this.state.year,
                my_rating: this.state.rating,
                poster_URL: this.state.poster
            })
        })
            .then(response => console.log(response))
    }

    editMovie = (e) => {
        let id = e.target.id
        console.log('editButton', this.state.editMovie)
    }

    // deleteHandler = (i, e) => {
    //   e.preventDefault()
    //   this.state.onDelete(this.state.movies[i].id)
    // fetch('https://omdb-son.herokuapp.com/', {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application-json',
    //   },
    //   body: JSON.stringify({
    //     id: this.state.id,
    //     movies: this.state.title,
    //     director: this.state.director,
    //     year: this.state.year,
    //     my_rating: this.state.rating,
    //     poster_URL: this.state.poster
    //   })
    //   })
    //   .then(response => console.log(response))
    //   .then(res => res)
    //   .then(err => err)
    // }

    // let movie = this.state.movies.filter((movie) => {
    //   return id !== movie.id
    // })
    // this.setState(state => {
    //   state.movies = movies
    //   return state
    // })

    // onDelete(id) {
    //   deleteHandler(id)
    //   .then((movies) => {
    //     let movies = this.state.movies.filter((movie) => {
    //       return id !==movie.id
    //     })
    //     this.setState (state => {
    //       state.movies = movies
    //       return state
    //     })
    //   })
    // }

    render() {
        let allMovies = this.state.movies.map(movies =>
            <table className='table table-hover table-dark table-border'>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Director</th>
                  <th scope='col'>Year</th>
                  <th scope='col'>Rating</th>
                  <th scope='col'>Poster</th>
                </tr>
              </thead>
              <tbody className='table-striped-dark'>
                <tr scope="row col-span-1" className="movieTable">
                    <td>{movies.title}</td>
                    <td>{movies.director}</td>
                    <td>{movies.year}</td>
                    <td>{movies.my_rating}</td>
                    <td><img className='img' src={movies.poster_URL} /></td>
                    <Link to='/EditPage'>
                        <button onClick={this.editMovie}>Edit</button>
                    </Link>
                    {/* <td><button onClick={() => this.deleteHandler(i)}>Delete</button></td> */}
                </tr>
              </tbody>
            </table>
        )

        // onDelete={this.onDelete.bind(this)}

        return (

            <div className="router">
                <Navbar />
                <Route exact path='/' component={Home}/>
                <Route path='/NewMovie' component={NewMovie} />
                <Route path='/MovieList' render={() => <MovieList allMovies={allMovies} />} />
                <Route path='/SubmitNewMovie' render={() => <NewMovie />} />
            </div>

        )
    }
}

export default App
// submit={this.handleSubmit}