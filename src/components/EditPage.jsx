import React from 'react'
import { Link } from 'react-router-dom'

const EditPage = (props) => {

    console.log(props)

    return (
        props.editLoaded && props.editMovie.map(movie => {
            return (
                < div >
                    <form>
                        <img className='img' src={movie.poster_URL}></img>
                        <input className='' name='editTitle' defaultValue={movie.title} onChange={props.handleChange}></input>
                        <input className='' name='editDirector' defaultValue={movie.director} onChange={props.handleChange}></input>
                        <input className='' name='editYear' defaultValue={movie.year} onChange={props.handleChange}></input>
                        <input className='' name='editRating' defaultValue={movie.my_rating} onChange={props.handleChange}></input>
                        <input className='' name='editPoster' defaultValue={movie.poster_URL} onChange={props.handleChange}></input>
                        <button onClick={props.handleESubmit}>Submit</button>
                        <Link to='/MovieList'>
                            <button>Back</button>
                        </Link>

                    </form>
                </div >
            )
        })
    )
}



export default EditPage