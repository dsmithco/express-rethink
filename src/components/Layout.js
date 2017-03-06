'use strict';

import React from 'react';
import { Link } from 'react-router';
import Website from './Website'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: (this.props.router.location.domData ? this.props.router.location.domData.domain : domData.domain)
    };
  }
  render() {
    console.log(this);
    return (
      <div className="layout-container">
        <Website domain={this.state.domain}/>
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
