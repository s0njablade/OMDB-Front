// import React, { Component } from 'react'
// import EditPage from './EditPage'
// import { Link } from 'react-router-dom'

// class Movies extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             id: [],
//             movies: [],
//             title: '',
//             director: '',
//             year: 0,
//             rating: 0,
//             poster: ''
//         }
//     }

//     selectMovie = (e) => {
//         console.log('editMovie')
//         fetch(`https://omdb-son.herokuapp.com/${e.target.id}`)
//             .then(result => result.json)
//             .then((response) => {
//                 this.setState({
//                     movies: [response]
//                 })
//             })
//         console.log('edittededed!')
//     }

//     render() {

//         let editMovie = this.movies.map(movie => {
//             console.log(movie.title)
//             return(
//             < div key={`movie ${movie.id}`}>
//             <Link to="/MovieList">
//                 <button className="back-button">Back</button>
//             </Link>
//             <h2 className="add-info">{movie.title}</h2>
//             <div className="show-info">
//                 <img className="movie-poster" src={movie.poster} />
//                 <h5>Director: {movie.director}</h5>
//                 <h5>Year Made: {movie.year}</h5>
//                 <h5>My Rating: {movie.rating}</h5>
//             </div>
//         </div >
//             )}
//         )

//         return (
//             <div>
//                 {this.editMovie}
//             </div>

            
//     )
// }
// }


// export default Movies