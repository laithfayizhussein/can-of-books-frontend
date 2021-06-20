import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

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
        return (
            <div>
                <h2>{this.state.userName}</h2>
                <p>{this.state.userEmail}</p>
                <img src={this.state.userPicture} alt={this.state.userName} />
            </div>
        )
    }
}

export default withAuth0(Profile)

