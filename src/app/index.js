const b = benchmark("React App");
import React, {Component} from 'react';
//import HeroSlider from './containers/HeroSlider'
import 'babel-polyfill';
import Main from './components'
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../app';
import store from '../app/store';
import {Provider} from 'react-redux';
import { BrowserRouter, StaticRouter,Route, Switch} from 'react-router-dom';
import {ENV_CONFIG} from '../config';
//import ReactGA from 'react-ga';

// ReactGA.initialize(ENV_CONFIG.GA.KEY, { debug: true });
// import $ from 'jquery';

// import 'material-design-lite/material.min.css';

//Importing Animate CSS
// import 'wowjs/css/libs/animate.css';

//Importing Global styles
import '../styles/core.scss';

// Importing Material JS lib
// import 'material-design-lite/material.min.js';

// import bootstrap from '../config/bootup';

// bootstrap();
// Create app component
const app = document.querySelector('#app');

render(<Provider store={store}>
    <Main/>
</Provider>, app);
b.stop();



