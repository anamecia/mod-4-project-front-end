import React, {Component} from 'react'

class SearchForm extends Component {

    state = {
        searchTerm: ''
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render(){
        return(
            <>
            <input type='text' placeholder='Title/Author/Isbn' onChange={this.handleOnChange}/>
            </>
        )
    }
}

export default SearchForm