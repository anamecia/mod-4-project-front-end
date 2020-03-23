import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

class  NavBar extends Component {

    render(){
        return(
            <div className='nav-bar'>  
                <div className='logo-container'>
                    <Link className='logo' to='/' >Bettereads</Link>
                </div>
                <div className='nav-links'>
                    <Link to='/userbooks' onClick={this.props.goToMyBooks}>My Books</Link>
                    {this.props.username && <Link to='/' onClick={this.props.signOut}>Sign Out </Link>}
                </div>
            </div>
        )
    }
    
}

export default NavBar