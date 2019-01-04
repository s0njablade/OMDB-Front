import React, { Component } from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import NewMovie from './components/NewMovie'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      movies: [],
      director: '',
      year: 0,
      rating: 0,
      poster: ''
    }
  }

  componentDidMount(){
    fetch('https://omdb-son.herokuapp.com/')
      .then(response => response.json())
      .then(movies => this.setState({movies}))
      console.log('movies', this.state.movies)
  }

  handleSubmit = (e) =>{
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
      poster_URL: this.state.poster,
    })
  })
  .then(response => console.log(response))
  }

  editMovie = (e) =>{
    let id = e.target.id
    console.log('editButton', this.state.editMovie)
    }
  

  render() {
    
    let allMovies = this.state.movies.map(movies => 
      <tr className="movieTable">
        <td>{movies.title}</td>
        <td>{movies.director}</td>
        <td>{movies.year}</td>
        <td>{movies.my_rating}</td>
        <td><img src={movies.poster_URL} /></td>
        <td><button onClick={this.editMovie}>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    )

    return (
      <span className="App">
        <Navbar />
        <Background />
        <MovieList allMovies={allMovies} />
        <NewMovie submit={this.handleSubmit}/>
      </span>
    )
  }
}

export default App
