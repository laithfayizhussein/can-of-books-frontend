import React from 'react';
import BookUpdateFormModal from './BookUpdateFormModal';

class UpdateBookButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: false
        }
    }
    formStatusChanger = () => {
        this.setState({ formStatus: true })
    };

    modalClosed = () => {
        this.setState({ formStatus: false })
    };

    render() {

        return (
            <>
                <button onClick={this.formStatusChanger}>update Books</button>
                {this.state.formStatus &&
                    <BookUpdateFormModal
                        modalClosed={this.modalClosed}
                        formStatus={this.state.formStatus}
                        booksDataAfterUpdate={this.props.booksDataAfterUpdate}
                        BookIndex={this.props.BookIndex}

                    />
                }
            </>
        )
    }
}

export default UpdateBookButton;