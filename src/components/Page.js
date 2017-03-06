'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import PageController from '../../controllers/PageController';

export default class Page extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    var that = this;
    var pc = new PageController();
    pc.show(this.props.params.id).then(function(reponse){
      if(reponse && reponse.data){
        var title = reponse.data.title;
        that.setState({
          title: title
        });
      }
    });
  }

  render() {

      return (
        <div className="app-container">
          Page {this.props.params.id}
          <br/>
          {this.state.title}
          <br/>
          <Button color="danger">Danger!</Button>
        </div>
      );

  }
}
