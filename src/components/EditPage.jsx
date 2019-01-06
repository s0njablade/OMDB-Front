import React from 'react'
import { Link } from 'react-router-dom'
import MovieList from './MovieList'

const EditPage = (props) => {

    console.log(props)

    // let editInfo = props.movies.map((movie,index) =>{
    //     return (<EditPage key={index} eMovie={eMovie}/>)
    // })

    return (

        <div>
            {this.props.eMovie}
            <form>
                {/* <input type="text" placeholder="movie name" onChange={this.handleNameInput} />
                <input type="text" placeholder="director" onChange={this.handleDirectorInput} />
                <input type="text" placeholder="year" onChange={this.handleYearInput} />
                <input type="text" placeholder="rating" onChange={this.handleRatingInput} /> */}
                <button onClick={this.handleESubmit} type="submit">Submit!!!</button>

            </form>
        </div>
    )
}


//         <table className='editMovie'>
//             <thead className='editMovieHeader'>
//                 <tr>
//                     <th>Title</th>
//                     <th>Poster</th>
//                     <th>Director</th>
//                     <th>Year</th>
//                     <th>Rating</th>
//                 </tr>
//             </thead>
//             <tbody className='selectedMovie'>
//                 {props.eMovie}
//                 {props.deleteHandler}
//             </tbody>
//         </table>
//     )
// }

export default EditPage