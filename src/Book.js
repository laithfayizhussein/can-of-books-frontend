import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <>
                <h2>My books</h2>
                {this.props.books.length && this.props.books.map((book, idx) => (
                    <div key={idx}>
                        {book.name}
                    </div>
                ))}
            </>
        )
    }
}

export default Book;