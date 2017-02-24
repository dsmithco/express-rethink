import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

export default class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}

var container = document.getElementById('react-container')

ReactDOM.render(<Index host={container.getAttribute('data-host')} />, container);
