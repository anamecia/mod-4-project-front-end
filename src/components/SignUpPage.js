import React, { Component } from 'react'

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
            </div>
        )
    }  
}

export default SignUpPage