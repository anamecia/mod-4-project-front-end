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
            <div>
                <form onSubmit={null}>
                    <label>Username:</label>
                    <input type='text' name='username' onChange={this.handleOnChange}/>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={this.handleOnChange}/>
                    <input type='Submit'/>
                </form>
                <p>Create an account: <Link to='/signup'> Sign Up </Link></p>

                <MainImage />
            </div>  
        )
    }  
}

export default SignInPage