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
            <>  
            <div className="eight wide column">
                <Link to='/' className="column">AppName</Link>
            </div>
            <div className="eight wide column">
                <label className="column" onClick={this.toggleSearchForm}>Search</label>
                {this.state.displaySearchForm && <SearchForm />}
                <Link to='/' onClick={this.props.signOut}className="column">Sign Out </Link>
            </div>
            </>
        )
    }
    
}

export default NavBar