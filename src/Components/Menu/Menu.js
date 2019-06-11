import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="row">
      <div className="col-md-12 mt-5">
        <div className="navbar navbar-expand-md navbar-light">
          <div className="navbar-brand">
            <a href="/">
              <img width="300px" src="http://bysearch.fr/wp-content/uploads/2017/03/amazon-logo-e1490617903785.png" alt="logo"/>
            </a>
          </div>
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link"  to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;