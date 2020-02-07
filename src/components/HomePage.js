import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import MainImage from './MainImage.js'

class HomePage extends Component {

    render (){
        return(
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='signin'>Sign In</Link>
                <MainImage />
            </div>
        )
    } 
}

export default HomePage