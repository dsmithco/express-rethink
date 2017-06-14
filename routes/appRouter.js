import express from 'express';
var router = express.Router();
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext, matchPath, StaticRouter } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory'
import App from '../src/components/App';

const memoryHistory = createMemoryHistory()


/* GET home page. */

router.get('*', (req, res) => {
    let markup =  ReactDOMServer.renderToString(
        <StaticRouter context={{}} location={req.originalUrl} history={memoryHistory}>
            <App />
        </StaticRouter>
    )
    markup = '<div id="react-container">' + markup + '</div>'
    res.render('index', { title: 'Express', markup: markup });
});


// router.get('*', (req, res) => {
//
//   match(
//     { routes, location: req.url },
//     (err, redirectLocation, renderProps) => {
//
//       // in case of error display the error message
//       if (err) {
//         return res.status(500).send(err.message);
//       }
//
//       // in case of redirect propagate the redirect to the browser
//       if (redirectLocation) {
//         return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       }
//
//       // generate the React markup for the current route
//       var domain = req.get('host').split(':')[0];
//       var domData = {domain: domain}
//       renderProps.location.domData = domData;
//       console.log(renderProps);
//
//       let markup;
//
//       if (renderProps) {
//         // if the current route matched we have renderProps
//         markup = renderToString(<RouterContext {...renderProps}/>);
//       } else {
//         // otherwise we can render a 404 page
//         // markup = renderToString(<NotFoundPage/>);
//         res.status(404);
//       }
//
//       // render the index template with the embedded React markup
//       return res.render('index', { markup, domData});
//     }
//   );
// });

module.exports = router;
