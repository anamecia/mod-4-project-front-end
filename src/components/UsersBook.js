import React, { Component } from 'react'
import API from '../API'

import BookDetails from './BookMoreDetails'


class Book extends Component {

    state = {
        status: this.props.status
    }

    handleChange = (e) => {
        this.setState({ status: e.target.value})
    }

    handleClick = () => {    
        const data={ reading:{
            status: this.state.status
            } 
        }
        API.patchStatus(data, this.props.readingId)
    }

    render(){
        const { book } = this.props
        return (
            <div className="book-container">
                <BookDetails book={book}/>
            </div>
        
        )
    }
}

export default Book