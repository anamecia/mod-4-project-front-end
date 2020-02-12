import React, { Component } from 'react'
import BookDetails from './BookDetails'
import API from './API'

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
        return (
           <div className="ui card divided three column grid">
                <img className='book-cover' src={this.props.book.image}/>
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.authors && this.props.book.authors.join(', ')}</p>
                <select value={this.state.status} onChange={this.handleChange}>
                    <option>Read</option>
                    <option>Want to read</option>
                    <option>Currently Reading</option>
                </select>
                <button onClick={this.handleClick}>Edit</button>
            </div>
        
        )
    }
}

export default Book