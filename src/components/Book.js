import React, { Component } from 'react'
import BookDetails from './BookDetails'
import API from './API'

class Book extends Component {

    state = {
       status: 'Read'
    }

    handleChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    handleOnClick = () => {
       const  data = {book: {
            google_id: this.props.book.googleId,
            title: this.props.book.title,
            author: this.props.book.authors,
            image: this.props.book.image,
            description: this.props.book.description,
            genre: this.props.book.genres
            }
        }
        
        API.saveBook(data)
        .then(data => API.saveReading({status:this.state.status, book_id: data.book_id, user_id: data.user_id}) )
    }

    render(){
        return (
           <div className="ui card divided three column grid">
                <img class='book-cover' src={this.props.book.image}/>
                <h1>{this.props.book.title}</h1>
                <h1>{this.props.book.googleId}</h1>

                <p>{this.props.book.author && this.props.book.author.join(', ')}</p>
                <select onChange={this.handleChange}>
                    <option>Read</option>
                    <option>Want to read</option>
                    <option>Currently Reading</option>
                </select>
                <button onClick={this.handleOnClick}>Add Book</button>
                {/* <button onClick={this.handleOnClick}>Show More</button> */}
                {/* {this.state.showBookdetails && <BookDetails book={this.props.book}/>} */}
            </div>
        
        )
    }
}

export default Book