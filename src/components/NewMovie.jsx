import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NewMovie extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: [],
            movies: [],
            title: '',
            director: '',
            year: 0,
            rating: 0,
            poster: ''
        }
    }

    handleSubmit = (e) => {
        console.log("testing the submit button!!!!!!")
        e.preventDefault()
        fetch('https://omdb-son.herokuapp.com/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                movies: this.state.title,
                director: this.state.director,
                year: this.state.year,
                my_rating: this.state.rating,
                poster_URL: this.state.poster
            })
        })
        console.log('thank you!')
    }


    render() {

        return (
            <div className='newForm'>
                <form >
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-sm">Title</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control form-control-sm" id="colFormLabelSm"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Director</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Year</label>
                        <div className="col-sm-3">
                            <input type="number" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">My Rating</label>
                        <div className="col-sm-3">
                            <input type="number" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Poster URL</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="colFormLabel"></input>
                        </div>
                    </div>
                    <div>
                        <Link to='/MovieList' >
                            <button className='submit' onClick={this.handleSubmit}>Submit</button>
                        </Link>
                    </div>
                </form>
                <Link to='/MovieList'>
                    <button className='back'>Back</button>
                </Link>
            </div>
        )
    }
}
export default NewMovie