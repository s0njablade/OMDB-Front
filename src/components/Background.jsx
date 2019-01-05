import React, { Component } from 'react'
import cinema from '../assets/cinema.jpg'

const Background = (props) => {
    return (
        <div className="cinema">
            <img className='cinema' src={cinema} alt='cinema'></img>
        </div>
    )
}

export default Background