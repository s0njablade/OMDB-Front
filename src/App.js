import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import NewMovie from './components/NewMovie'
import EditPage from './components/EditPage'
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
        poster: '',
        editMovie: [],
        editTitle: '',
        editDirector: '',
        editYear: 0,
        editRating: 0,
        editPoster: '',
        newTitle: '',
        newDirector: '',
        newYear: 0,
        newRating: 0,
        newPoster: '',
        editLoaded: false
      }
  }

  async componentDidMount() {
    this.allMovies()
  }

  allMovies = () =>{
    fetch('https://omdb-son.herokuapp.com/')
    .then(response => response.json())
    .then(movies => this.setState({ movies }))
  console.log('movies', this.state.movies)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("testing the submit button!!!!!!")
    let newMovie = {
      title: this.state.newTitle,
      director: this.state.newDirector,
      year: this.state.newYear,
      my_rating: this.state.newRating,
      poster_URL: this.state.newPoster,
    }
    fetch('https://omdb-son.herokuapp.com/', {
        method: "POST",
        headers: new Headers({
            "content-type": "application/json",
        }),
        body: JSON.stringify(newMovie)
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          title: '',
          director: '',
          year: undefined,
          rating: undefined,
          url: ''
        })
    console.log('thank you!')
      })
  }

  selectMovie = (e) => {
    this.setState({ editLoaded: false })
    console.log('editMovie', e.target.id)
    fetch(`https://omdb-son.herokuapp.com/${e.target.id}`)
      .then(result => result.json())
      .then((response) => {
        this.setState({
          editMovie: [response],
          id: response.id,
          editTitle: response.title, 
          editDirector: response.director,
          editYear: response.year,
          editRating: response.my_rating,
          editPoster: response.poster_URL,
          editLoaded: true
        })
      })
    console.log('edit movies', this.state.editMovie)
  }

  handleESubmit = (e) => {
    e.preventDefault()
    fetch(`https://omdb-son.herokuapp.com/${this.state.id}`, {
      method: "PUT",
      headers: new Headers({
          "content-type": "application/json",
      }),
      body: JSON.stringify({
        title: this.state.editTitle,
        director: this.state.editDirector,
        year: Number(this.state.editYear),
        my_rating:  Number(this.state.editRating),
        poster_URL: this.state.editPoster,
      })
    })
      console.log('you submit the PUT request')
  }

  deleteMovie = (e) => {
    fetch(`https://omdb-son.herokuapp.com/${e.target.id}`, {
      method: "DELETE",
    })
      .then(() => this.allMovies())
    console.log('deleted!')
  }
  

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState ({ 
      [name]: value
    })
  } 


  render() {

    return (
      <div className='router'>
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/NewMovie' render={() => <NewMovie handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
          <Route path='/MovieList' render={() => <MovieList deleteMovie={this.deleteMovie} selectMovie={this.selectMovie} allMovies={this.state.movies} />} />
          <Route path='/EditPage' render={() => <EditPage editLoaded={this.state.editLoaded} handleChange={this.handleChange} handleESubmit={this.handleESubmit} editMovie={this.state.editMovie}/>} />
      </div>
    )
  }
} 

export default App
