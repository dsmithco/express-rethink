'use strict';

import React from 'react';
import SubBlock from './../Block'

export default class BasicBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blockParams: this.props.blockParams
    };
  }
  render() {
    return (
      <div className={this.state.blockParams.blockWidth + " block-container"}>
        <div className="wrapper">
          <div className="title">
            {this.state.blockParams.name}
          </div>
          <div className="body">
            <div dangerouslySetInnerHTML={{__html: this.state.blockParams.about}} />
          </div>
          {
            this.state.blockParams.blocks && this.state.blockParams.blocks.length > 0 ?
            this.state.blockParams.blocks.map( (blockParams, index) => <SubBlock key={index} blockParams={blockParams} /> )
            : ''
          }
        </div>
      </div>
    );
  }
}
