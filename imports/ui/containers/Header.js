import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import AccountsUIWrapper from '../components/AccountsUIWrapper';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {

  render() {
    const {userId} = this.props;
    return (

    <header id="mainHeader">
      <Link to="/" className="brand">Travel Far&trade;</Link>
      <nav>
        <ul id="mainNav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/places">Places</Link></li>
          <li><Link to="/promise">Our Promise</Link></li>
          <li><Link to="/order">Order</Link></li>
          {(userId !== null) ? (
            <li><Link to="/admin">Admin</Link></li>
          ) : null}
          <li><AccountsUIWrapper /></li>
        </ul>
      </nav>
    </header>

    );
  }
}

Header.propTypes = {
  userId: React.PropTypes.string,
};

export default createContainer(() => {
  return {
    userId: Meteor.userId(),
  };
}, Header);
