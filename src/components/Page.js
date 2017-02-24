'use strict';

import React from 'react';
import { Button } from 'reactstrap';

export default class Page extends React.Component {
  render() {
    return (
      <div className="app-container">
        Page {this.props.params.id} <Button color="danger">Danger!</Button>
      </div>
    );
  }
}
