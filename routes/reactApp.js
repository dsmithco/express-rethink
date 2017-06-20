import express from 'express';
var router = express.Router();
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, matchPath, StaticRouter, staticContext } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory'
import App from '../src/components/App';
import axios from 'axios';

const memoryHistory = createMemoryHistory()

/* GET home page. */

function renderPage(req, res){
  axios.get('http://' + req.headers.host.split(':')[0] + '/api' + req.originalUrl).then(function(response){
      let initialState = response.data
      let markup =  ReactDOMServer.renderToString(
          <StaticRouter context={initialState} location={req.originalUrl} history={memoryHistory}>
              <App/>
          </StaticRouter>
      )
      markup = '<script>window.__INITIAL_STATE__ = ' +
               JSON.stringify(response.data) +
               '</script><div id="react-container">' + markup + '</div>'
      res.render('index', { title: 'Express', markup: markup });
    }).catch(function(error){
    });
}

router.get('/pages/*', (req, res) => {
  renderPage(req, res);
});

router.get('/', (req, res) => {
  renderPage(req, res);
});

router.get('/', (req, res) => {
      let markup = '<script>window.__INITIAL_STATE__ = ' + JSON.stringify({}) + '</script><div id="react-container">' + markup + '</div>';

      res.render('index', { title: 'Express', markup: markup });
});

router.get('/*', (req, res) => {
      let markup = '<script>window.__INITIAL_STATE__ = ' + JSON.stringify({}) + '</script><div id="react-container">' + markup + '</div>';

      res.render('index', { title: 'Express', markup: markup });
});


module.exports = router;
