'use strict';

import React from 'react';

export default class Website extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        domain: this.props.domain
    };
  }

  render() {
    return (
      <div className="app-container">
        Website for {this.state.domain}
      </div>
    );
  }
}
