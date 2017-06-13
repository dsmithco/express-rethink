import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'

const browserHistory = createBrowserHistory()


export default class Index extends React.Component {
  render() {
    return (

        <BrowserRouter history={browserHistory}>
            <App />
        </BrowserRouter>
    );
  }
}

var container = document.getElementById('react-container');

ReactDOM.render(<Index domData={document.domData} />, container);
