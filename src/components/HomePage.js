import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AppCss from '../App.css'

import MainImage from './MainImage.js'

class HomePage extends Component {


    render (){
        return(
            <div className="member-container">
                <div className="slogan-container">
                    <h1>Keep track of your readings</h1>
                    <p><em>"Reading is probably another way of being in a place."</em></p>
                    <p>― José Saramago, The Double</p>
                    <div className="member-btn-container">
                        <Link className="member-btn" to='/signup'>Sign Up</Link>
                        <Link className="member-btn" to='/signin'>Sign In </Link>
                    </div>
                </div>
                <div className="main-image-container">
                    <MainImage />
                </div>
            </div>
        )
    } 
}

export default HomePage