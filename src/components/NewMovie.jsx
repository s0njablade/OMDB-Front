import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const NewMovie = (props) => {

    return (
        <div className='newMovie otherBg'>
        <div className="newForm">
            <form >
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label col-form-label-sm">Title</label>
                    <div className="col-sm-3">
                        <input onChange={props.handleChange} type="text" className=" -sm" id="colFormLabelSm"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Director</label>
                    <div className="col-sm-3">
                        <input onChange={props.handleChange}  type="text" className="" id="colFormLabel"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Year</label>
                    <div className="col-sm-3">
                        <input onChange={props.handleChange} type="number" className="" id="colFormLabel"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">My Rating</label>
                    <div className="col-sm-3">
                        <input onChange={props.handleChange} type="number" className="" id="colFormLabel"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Poster URL</label>
                    <div className="col-sm-3">
                        <input onChange={props.handleChange} type="text" className="" id="colFormLabel"></input>
                    </div>
                </div>
                <div>
                        <button className='submit' onClick={props.handleSubmit}>Submit</button> 
                </div>
                <Link to='/MovieList'>
                    <button className='back'>Back</button>
                </Link>
            </form>
            </div>
        </div>
    )
}
export default NewMovie