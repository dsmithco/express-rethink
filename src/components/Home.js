'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        Home Page!! <Link to="/pages/about">Page</Link>
      </div>
    );
  }
}
