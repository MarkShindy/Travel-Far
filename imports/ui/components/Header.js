import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';


export default class Header extends Component {

  render() {
    return (

    <header id="mainHeader">
      <Link to="/" className="brand">Travel Far&trade;</Link>
      <nav>
        <ul id="mainNav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/places">Places</Link></li>
          <li><Link to="/promise">Our Promise</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/members">Returning Members</Link></li>
        </ul>
      </nav>
    </header>

    );
  }
}
