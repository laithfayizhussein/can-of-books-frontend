  
import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPicture: this.props.auth0.user.picture
        }
    }
    render() {
        // console.log(this.props.auth0);
        return (

            <Card style={{ width: '18rem' , 'margin-top':'100px', 'margin-bottom':'100px'}}>
  <Card.Img variant="top" src={this.state.userPicture} />
  <Card.Body>
    <Card.Title>{this.state.userName}</Card.Title>
    <Card.Text>
    {this.state.userEmail}
    </Card.Text>
  </Card.Body>
</Card>

        )
    }
}

export default withAuth0(Profile)