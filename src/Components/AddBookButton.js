import React from 'react';
import BookFormModal from './BookFormModal';

class AddBookButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            formStatus : false
        }
    }
    formStatusChanger=()=> {
        this.setState({formStatus:true})};

    modalClosed= ()=> {
        this.setState({formStatus : false})};

    render() {

      return(
       <>
      <button onClick={this.formStatusChanger}>Add Book</button>
      {this.state.formStatus &&
<BookFormModal
      modalClosed={this.modalClosed}
      formStatus={this.state.formStatus}
      newBooks={this.props.newBooks}
      />
    }

      
</>
      )
    }
  }
  
  export default AddBookButton;