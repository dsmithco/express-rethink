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

  constructor(props, context){
    super(props, context);
    this.state = {
      page: {blocks: []}
    }
  }

  componentDidMount() {
    let that = this;

    if(window.__INITIAL_STATE__.id){
      that.setState({
        'page': window.__INITIAL_STATE__
      })
    }else{
      axios.get('http://localhost/api/pages/' + that.props.match.params.id)
        .then(function(response){
          that.setState({
            page: response.data
          });
        })
        .catch(function(error){
        });
    }
      //do what you need here
  }

  render() {

      return (
        <div className="app-container">
          {this.state.page.blocks ? this.state.page.blocks.map( (blockParams, index) => <Block key={index} blockParams={blockParams} /> ) : ''}
        </div>
      );

  }
}
