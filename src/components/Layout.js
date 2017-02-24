'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container">
        <div>
          <Link to="/">
            Home
          </Link>&nbsp;
          <Link to="/pages/44">
            Page 44
          </Link>
        </div>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
