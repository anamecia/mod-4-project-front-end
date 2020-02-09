import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainImage from './MainImage.js'


class SignInPage extends Component {

    state = {
        username: null,
        password: null,
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render(){
        return(
            <div className="ui grid">
                <div className="five wide column centered middle aligned">
                    <form class="ui form" onSubmit={null}>
                        <div class="field">
                            <label>Username:</label>
                            <input class="sign-input" type='text' name='username' onChange={this.handleOnChange}/>
                        </div>
                        <div class="field">
                            <label>Password:</label>
                            <input class="sign-input" type='password' name='password' onChange={this.handleOnChange}/>
                        </div>
                    
                        <input class='member-btn' type='Submit'/>
                        <p>Create an account: <Link className= "sign-link" to='/signup'> Sign Up </Link></p>
                    </form>
                </div>
                <div className="eleven wide column centered middle aligned">
                    <MainImage />
                </div>
            </div>  
        )
    }  
}

export default SignInPage