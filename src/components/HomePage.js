import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {

    render (){
        return(
            <div>
                <Link to='/signup'>Sign Up</Link>
                <Link to='signin'>Sign In</Link>
            </div>
        )
    } 
}

export default HomePage