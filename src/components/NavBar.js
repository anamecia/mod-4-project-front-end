import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

class  NavBar extends Component {

    state = {
        displaySearchForm: false
    }

    toggleSearchForm = () => {
        this.setState({
            displaySearchForm: !this.state.displaySearchForm
        })
    }


    render(){
        return(
            <div>
                <Link to='/'>AppName</Link>
                <label onClick={this.toggleSearchForm}>Search</label>
                {this.state.displaySearchForm && <SearchForm />}
                <Link to='/'>Sig Out </Link>
            </div>
        )
    }
    
}

export default NavBar