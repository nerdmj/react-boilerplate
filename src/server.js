'use strict';

import ENV_CONFIG from '../src/config/environment/index';
const ssrEnable = ENV_CONFIG.SSR;
require('dotenv').config();
import { StaticRouter } from 'react-router'
import {getHomeContent} from './app/components/landing/Home/action';
import Main from './app/components'
import {preLoadStore} from './utils/routeHelper';
import cookie from './utils/react-cookies';


import 'babel-polyfill';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const port = 3000;
import ejs from 'ejs';
import assets from './assets';
import store from './app/store';

import { Provider } from 'react-redux';
import cookieParser from 'cookie-parser';
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
const server = global.server = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public'), { maxAge: 3600000 }));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//
// Only use morgan logger in production
// -----------------------------------------------------------------------------
if (process.env.NODE_ENV === 'production') {
  // server.use(morgan('combined'));
}

server.get('/versionInfo.txt', (req, res, next) => {
    res.send(`Current Version: 1.1.1`);
});


server.get('*', (req, res, next) => {
  const b = benchmark("Server side Rendering for URL: " + req.url);
  // cookie.plugToRequest(req, res);
  // if (req.url.indexOf("icon") > -1) {
  if ((req.url.indexOf(".") > -1)) {
    res.sendFile(path.resolve(__dirname, "public/images/logo.jpg"));
    return;
  }
  const {url,query} = req;
  const location = {
    uri:url.split("?")[0],
    queryString:query
  };
    // console.log(url, "---URL--------------------------------------");
    // console.log(query, "--query---------------------------------------");
    const template = ejs.compile(fs.readFileSync(path.resolve(__dirname,'../src/entry.html')).toString());
    const data = {
      NODE_ENV:process.env.NODE_ENV,
      title: 'HDFC',
      entry: assets.index.js,
      vendor: assets.vendor.js,
      stylesheet: assets.index.css,
      preloadedState:"{}",
      body: ""
    };
    if (ssrEnable) {
      preLoadStore(location,store).then(() => {
        console.log("==========Got init data in store ==========");
        let context = {};
        // Render the component to a string
        const html = renderToString(
            <StaticRouter location={req.url} context={context}>
              <Provider store={store}>
                <Main/>
              </Provider>
            </StaticRouter>
        );
        // Send the rendered page back to the client
        data.preloadedState = JSON.stringify(store.getState());
        data.body = html;
        b.stop();
        res.send(template(data))
      })

    } else {
      s("***************SSR Disable***************")
      b.stop();
      res.status(200);
      res.send(template(data));
    }
});


//
// Error handling
// -----------------------------------------------------------------------------
// 404 - when nothing handles this request (without error)
server.use((req, res) => {
  res.status(404);
  res.send('404');
});

// Other Server Errors
server.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  // logger.error(error);
  console.log(error);
  const statusCode = error.status || 500;
  res.status(statusCode);
  res.send('500');
});


server.listen(port, () => {
  //logger.info(`The server is running at http://localhost:${port}/ in ${process.env.NODE_ENV} mode`);
  console.info(`The server is running at http://localhost:${port}/ in ${''} mode`);
});
