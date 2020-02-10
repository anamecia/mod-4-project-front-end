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
                            <input className="sign-input" type='text' name='username' onChange={this.handleOnChange}/>
                        </div>
                        <div className="field">
                            <label>Password:</label>
                            <input className="sign-input" type='password' name='password' onChange={this.handleOnChange}/>
                        </div>
                    
                        <input className='member-btn' type='Submit'/>
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