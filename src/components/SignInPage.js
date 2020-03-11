import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainImage from './MainImage.js'
import API from './API'


class SignInPage extends Component {

    state = {
        username: '',
        password: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        API.signIn(this.state.username, this.state.password)
          .then(data => {
            if (data.error) throw Error(data.error)
            this.props.signIn(data)
            this.props.history.push('/userbooks')
          })
          .catch(error => alert(error))
      }

    render(){
        return(
            <div className="member-container">
                <div className="form-container">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Username:</label>
                            <input type='text' name='username' onChange={this.handleOnChange}/>
                        </div>
                        <div className="field">
                            <label>Password:</label>
                            <input type='password' name='password' onChange={this.handleOnChange}/>
                        </div>
                    
                        <input className='member-btn' type='Submit' value='Sign In'/>
                        <p>Create an account: <Link className= "sign-link" to='/signup'> Sign Up </Link></p>
                    </form>
                </div>
                <div className="main-image-container">
                    <MainImage />
                </div>
            </div>  
        )
    }  
}

export default SignInPage