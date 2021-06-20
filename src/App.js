import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './Component/Profile'
import Login from './Login'
import { withAuth0 } from "@auth0/auth0-react";
import MyFavoriteBooks from './MyFavoriteBooks'
class App extends React.Component {

  render() {
    console.log('app', this.props)
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
              {isAuthenticated && (
                <MyFavoriteBooks/>
              )}
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */
                <Login />}
              </Route>
              <Route exact path="/Profile">
                <Profile />
             </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default  withAuth0(App);
