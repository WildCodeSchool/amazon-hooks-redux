import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="row">
      <div className="col-md-12 mt-5">
        <div className="navbar navbar-expand-md navbar-light">
          <div className="navbar-brand">
            <a href="/">
              <img width="300px" src="https://lezardscreation.fr/wp-content/files/2018/10/Blog-1280px-Amazon_logo_plain-700x211.png" alt="logo"/>
            </a>
          </div>
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <Link className="nav-link" href="/register">Register</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link"  href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;