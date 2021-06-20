import { withAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Profile from './Profile'
import Login from './Login'
import Header from './Header';
import Footer from './Footer';
import MyFavoriteBooks from './myFavoriteBooks'
import IsLoadingAndError from './IsLoadingAndError';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('App', this.props)
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated &&
                  <MyFavoriteBooks />
                }
                {!isAuthenticated &&
                  <Login />
                }

              </Route>
              <Route exact path="/profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {isAuthenticated &&
                  <Profile />
                }
              </Route>

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);