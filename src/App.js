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
            id: [],
            movies: [],
            title: '',
            director: '',
            year: 0,
            rating: 0,
            poster: '',
            editMovie:[]
        }
    }

    componentDidMount() {
        fetch('https://omdb-son.herokuapp.com/')
            .then(response => response.json())
            .then(movies => this.setState({ movies }))
        console.log('movies', this.state.movies)
    }

    selectMovie = (e) => {
      console.log('editMovie', e.target.id)
      fetch(`https://omdb-son.herokuapp.com/${e.target.id}`)
          .then(result => result.json())
          .then((response) => {
              this.setState({
                  editMovie: [response]
              })
          })
      console.log('edit movies', this.state.editMovie)
  }


  handleESubmit = (event) => {
    event.preventDefault()
    fetch(`https://movies-project-maf.herokuapp.com/${this.props.editMovie}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            title: this.state.title,
            director: this.state.director,
            year: this.state.year,
            my_rating: this.state.rating,
            poster_url: this.state.poster
            })
        })
        console.log("you submit the PUT request")
}

    handleNameInput = (e) => {
      console.log(e.target.value)
      this.setState({
          title: e.target.value
        })
    }

    handleDirectorInput = (e) => {
      console.log(e.target.value)
      this.setState({
          director: e.target.value
        })
    }

    handleYearInput = (e) => {
      console.log(e.target.value)
      this.setState({
          year: e.target.value
        })
    }

    handleRatingInput = (e) => {
      console.log(e.target.value)
      this.setState({
          rating: e.target.value
        })
    }

    render() {
        let allMovies = this.state.movies.map(movies =>
            <table className='table'>
                <tr key={movies.id}className="movieTable">
                    <td>{movies.title}</td>
                    <td>{movies.director}</td>
                    <td>{movies.year}</td>
                    <td>{movies.my_rating}</td>
                    <td><img className='img' src={movies.poster_URL} /></td>
                    <Link to='/EditPage'>
                      <td><button className='edit' id={movies.id} onClick={this.selectMovie} >Edit</button></td>
                    </Link>
                    {/* <td><button onClick={() => this.deleteHandler(i)}>Delete</button></td> */}
                </tr>
            </table>
        )

        // onDelete={this.onDelete.bind(this)}

        const editMovie = this.state.editMovie.map(movie => 
          <table className='editTable'>
            <tr key={movie.id}>
              <td>{movie.title}</td> 
              <td><img className="img" src={movie.poster_URL}/></td>
              <td>Director: {movie.director}</td>
              <td>Year Made: {movie.year}</td>
              <td>My Rating: {movie.my_rating}</td>
              <td>
                <Link to="/MovieList">
                    <button className="back-button">Back</button>
                </Link>
              </td>
              </tr>
          </table>
      ) 

        return (

            <div className="router">
                <Navbar />
                <Route exact path='/' component={Home}/>
                <Route path='/NewMovie' component={NewMovie} />
                <Route path='/MovieList' render={() => <MovieList allMovies={allMovies} />} />
                <Route path='/EditPage' render={() => <EditPage handleESubmit={this.handleESubmit} eMovie={editMovie}/>} />
            </div>

        )
    }
}

export default App
