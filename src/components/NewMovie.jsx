import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const NewMovie = (props) => {


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
                            <button className='submit' onClick={props.handleSubmit}>Submit</button>
                        
                    </div>
                </form>
                <Link to='/MovieList'>
                    <button className='back'>Back</button>
                </Link>
            </div>
        )
    }

export default NewMovie