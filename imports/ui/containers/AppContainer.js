import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Footer from '../components/Footer';
// route components
import HomePage from '../pages/HomePage';
import PlacesPage from '../pages/PlacesPage';
import PromisePage from '../pages/PromisePage';
import OrderPage from '../pages/OrderPage';
import AdminPage from '../pages/AdminPage';
//import MembersPage from '../pages/MembersPage';
//import NotFoundPage from '../pages/NotFoundPage';

// App component - represents the whole app
export default class AppContainer extends Component {

  render() {
    return (
      <div className="container">

        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomePage}/>
            <Route path="/places" component={PlacesPage}/>
            <Route path="/promise" component={PromisePage}/>
            <Route path="/order" component={OrderPage}/>
            <Route path="/admin" component={AdminPage}/>
            {/*<Route path="lists/:id" component={ListPageContainer}/>
            <Route path="members" component={MembersPage}/>
            <Route path="signin" component={AuthPageSignIn}/>
            <Route path="*" component={NotFoundPage}/>
            <Route path="join" component={AuthPageJoin}/>*/}
            <Footer />
          </div>
        </Router>

      </div>
    );
  }
}
