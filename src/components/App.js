import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import NotFound from './NotFound';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Page}/>
            <Route path="/pages/:id" component={Page}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    );
  }
}
