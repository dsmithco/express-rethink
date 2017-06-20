'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import SubBlock from './Block'
import BasicBlock from './BlockTypes/BasicBlock'
import NavBlock from './BlockTypes/NavBlock'

export default class Block extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      blockParams: this.props.blockParams
    };
  }

  componentDidMount() {

  }

  blockSwitch(blockParams) {
   switch(blockParams.block_type) {
     default:
       return <BasicBlock blockParams={blockParams} />
     case 'nav':
       return <NavBlock blockParams={blockParams} />
   }
  }

  render() {
      return (
        <div>
          {this.blockSwitch(this.state.blockParams)}
        </div>
      );
  }
}
