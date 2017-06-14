'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import Block from './Block'

let blocks = [
  {
    title: 'Menu',
    body: 'this is a body laksjdhfk lajshfk ajshf klajshfl kajsdfk jasd klfjahskl fjhakls fjhaks djf',
    blockWidth: 'col-12',
    blockType: 'nav',

  },
  {
    blockWidth: 'col-12',
    blocks: [
      {
        title: 'Inner Block',
        body: 'this is a body laksjdhfk lajshfk ajshf klajshfl kajsdfk jasd klfjahskl fjhakls fjhaks djf',
        blockWidth: 'col-3'
      },
      {
        title: 'Another Inner Block',
        body: 'this is another body askjdfhk ajshfk jashf ',
        blockWidth: 'col-3'
      },
      {
        title: 'Another Inner Block',
        body: 'this is another body',
        blockWidth: 'col-3'
      },
      {
        title: 'Another Inner Block',
        body: 'this is another body',
        blockWidth: 'col-3'
      }
    ]
  },
  {
    title: 'Another title',
    body: 'this is another body',
    blocks: [

    ]
  }
];

export default class Page extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    var that = this;
    // pc.show(this.props.params.id).then(function(reponse){
    //   if(reponse && reponse.data){
    //     var title = reponse.data.title;
    //     that.setState({
    //       title: title
    //     });
    //   }
    // });
  }

  render() {

      return (
        <div className="app-container">
          {blocks.map( (blockParams, index) => <Block key={index} blockParams={blockParams} /> )}
        </div>
      );

  }
}
