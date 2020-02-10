import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainImage from './MainImage.js'
import API from './API.js'


class SignUpPage extends Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signUp(this.state.username, this.state.password, this.state.passwordConfirmation)
            .then(data => {
                if (data.error) throw Error(data.error)
                this.props.signIn(data)
            })
            .catch(error => alert(error))
    }

    render(){
        return(
            <div className="ui grid">
                <div className="five wide column centered middle aligned">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Username:</label>
                            <input type='text' name='username' onChange={this.handleOnChange}/>
                        </div>
                        <div className="field">
                            <label>Password:</label>
                            <input type='password' name='password' onChange={this.handleOnChange}/>
                        </div>
                        <div className="field">
                            <label>Password confirmation:</label>
                            <input type='password' name='passwordConfirmation' onChange={this.handleOnChange}/>
                        </div>
                        <input className="member-btn" type='Submit'/>
                        <p>Already have an AppName account? <Link  className="sign-link" to='/signin'> Sign In </Link></p>
                    </form>
                </div>
                <div className="eleven wide column centered middle aligned">
                    <MainImage />
                </div>
            </div>
        )
    }  
}

export default SignUpPage