import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import AppCss from '../App.css' 
import MainImage from './MainImage.js'

class HomePage extends Component {


    render (){
        return(
            <div className="ui centered middle aligned grid">
                <div className="five wide column centered middle aligned">
                    <div className="row">
                        <h1>Keep track of your readings</h1>
                        <p><em>"Reading is probably another way of being in a place."</em></p>
                        <p>― José Saramago, The Double</p>
                    </div>
                    <div className="row member-btn-container">
                        <Link className="member-btn" to='/signup'>Sign Up</Link>
                        <Link className="member-btn" to='/signin'>Sign In </Link>
                    </div>
                </div>
                <div className="eleven wide column centered middle aligned">
                    <MainImage />
                </div>
            </div>
        )
    } 
}

export default HomePage