import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

class  NavBar extends Component {

    // state = {
    //     displaySearchForm: false
    // }

    // toggleSearchForm = () => {
    //     this.setState({
    //         displaySearchForm: !this.state.displaySearchForm
    //     })
    // }

    render(){
        return(
            <div className='nav-bar'>  
                <div className='logo-container'>
                    <Link className='logo' to='/' >Bettereads</Link>
                </div>
                <div className='nav-links'>
                    <Link to='/userbooks' onClick={this.props.goToMyBooks}>My Books</Link>
                    {/* <label  onClick={this.toggleSearchForm}>Search</label>
                    {this.state.displaySearchForm && <SearchForm updateSearchTerm={this.props.updateSearchTerm} searchByBookName={this.props.searchByBookName} searchTerm={this.props.searchTerm}/>} */}
                    <Link to='/' onClick={this.props.signOut}>Sign Out </Link>
                </div>
            </div>
        )
    }
    
}

export default NavBar