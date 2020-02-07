import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainImage from './MainImage.js'

class SignUpPage extends Component {

    state = {
        username: null,
        password: null,
        passwordConfirmation: null
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={null}>
                    <label>Username:</label>
                    <input type='text' name='username' onChange={this.handleOnChange}/>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={this.handleOnChange}/>
                    <label>Password confirmation:</label>
                    <input type='password' name='passwordConfirmation' onChange={this.handleOnChange}/>
                    <input type='Submit'/>
                </form>
                <p>Already have an AppName account? <Link to='/singin'> Sign In </Link></p>
                <MainImage />
            </div>
        )
    }  
}

export default SignUpPage