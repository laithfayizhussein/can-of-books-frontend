import axios from 'axios';
import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";

class DeleteButton extends React.Component {

    deleteBook = () => {
        axios.delete(`${process.env.REACT_APP_SERVER}/book/${this.props.BookIndex}?email=${this.props.auth0.user.email}`).then(Response => {
            this.props.booksDataAfterDelet(Response.data)
        })
    }

    render() {

        return (
            <>
                <button onClick={this.deleteBook}>Delete Book</button>
            </>
        )
    }
}

export default withAuth0(DeleteButton);