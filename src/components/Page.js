'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import Block from './Block'
import NavBlock from './BlockTypes/NavBlock'

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
      page: this.props.staticContext || window.__INITIAL_STATE__ || {blocks: []}
    }
  }

  componentWillMount(nextProps){
    this.updatePage(nextProps);
  }

  componentWillReceiveProps(nextProps) {
      this.updatePage(nextProps);
  }

  updatePage(props) {
    if(!props || props.match.params.id != this.props.match.params.id){
      props = props || this.props;
      let that = this;
      axios.get('http://rethink.dev/api' + (props.match.params.id ? ('/pages/' + props.match.params.id) : ''))
        .then(function(response){
          that.setState({
            page: response.data
          });
        });
    }
  }

  shouldComponentUpdate(){
    return true
  }

  render() {

      return (
        <div className="app-container">
          <NavBlock title={this.state.page.website_meta.name} active={this.props.match.params.id} links={this.state.page.website_meta.pages} />
          {this.state.page.blocks ? this.state.page.blocks.map( (blockParams) => <Block key={blockParams.id} blockParams={blockParams} /> ) : ''}
        </div>
      );

  }
}
