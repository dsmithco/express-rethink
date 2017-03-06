import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Router history={browserHistory} domData={this.props.domData} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      </div>
    );
  }
}

var container = document.getElementById('react-container');

ReactDOM.render(<Index domData={document.domData} />, container);
