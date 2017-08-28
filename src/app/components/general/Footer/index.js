import React, { Component } from 'react';

import StaticFooter from './StaticFooter';
import style from './style.scss';

class Footer extends Component {
    render = () =>
                <footer className="footer">
                    Footer Section
                    <StaticFooter/>
                </footer>
}

export default Footer;
