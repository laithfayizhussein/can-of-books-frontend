import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBookButton from './Components/AddBookButton';
class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData: [],
            booksStatus: false
        }
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                booksData: response.data,
                booksStatus: true
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }

    newBooks= (newBooksData)=>{
        this.setState({
            booksData : newBooksData
        })
    }


    render() {
        return (
            <>
            <AddBookButton
            newBooks={this.newBooks}
            />
                {this.state.booksStatus &&
                    <Carousel>

                    {this.state.booksData.Books.map(value => {
                        return (

                            
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._AC_SX679_.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption style={{'margin-bottom':'20%' , 'color':'black'}}>
                                        <h1>{value.name}</h1>
                                        <p>{value.description}</p>
                                        <p>{value.status}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            
                        )
                    })}
                    </Carousel>
    }
            </>
        )
    }
}

export default withAuth0(Book);