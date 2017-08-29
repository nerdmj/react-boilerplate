import React, { Component } from 'react';

import StaticFooter from './StaticFooter';
import './style.scss';

class Footer extends Component {
    render = () =>
                <footer className="clearfix">
                    <StaticFooter/>
                </footer>
}

export default Footer;
