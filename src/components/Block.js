'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import SubBlock from './Block'

export default class Block extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blockParams: this.props.blockParams
    };
  }

  componentDidMount() {

  }

  render() {
      return (
        <div className={this.state.blockParams.blockWidth + " block-container"}>
          <div className="wrapper">
            <div className="title">
              {this.state.blockParams.title}
            </div>
            <div className="body">
              {this.state.blockParams.body}
            </div>
            {
              this.state.blockParams.blocks && this.state.blockParams.blocks.length > 0 ?
              this.state.blockParams.blocks.map( (blockParams, index) => <SubBlock key={index} blockParams={blockParams} /> )
              :''
            }
          </div>
        </div>
      );
  }
}
