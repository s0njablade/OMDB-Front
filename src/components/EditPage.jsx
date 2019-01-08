import React from 'react'
import { Link } from 'react-router-dom'

const EditPage = (props) => {

    console.log(props)

    return (
        props.editLoaded && props.editMovie.map(movie => {
            return (
                <div className='otherBg'>
                    <div className='addMovie'>
                        <h2 className='addInfo'>{movie.title}</h2>
                        <div className='posterForm'>
                            <img className='imgEdit' src={movie.poster_URL} />
                            <ul>
                                <h5>Title:</h5>
                                <h5>Director:</h5>
                                <h5>Year:</h5>
                                <h5>My Rating:</h5>
                                <h5>Poster URL:</h5>
                            </ul>
                            <form >
                                <input className='' name='editTitle' defaultValue={movie.title} onChange={props.handleChange}></input>
                                <input className='' name='editDirector' defaultValue={movie.director} onChange={props.handleChange}></input>
                                <input className='' name='editYear' defaultValue={movie.year} onChange={props.handleChange}></input>
                                <input className='' name='editRating' defaultValue={movie.my_rating} onChange={props.handleChange}></input>
                                <input className='' name='editPoster' defaultValue={movie.poster_URL} onChange={props.handleChange}></input>
                                <button className='submitBack' onClick={props.handleESubmit}>Submit</button>
                                <Link to='/MovieList'>
                                    <button className='editBack'>Back</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div >
            )
        })
    )
}
export default EditPage