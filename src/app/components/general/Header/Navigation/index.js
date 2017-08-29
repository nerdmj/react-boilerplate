import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {URL_PATH} from '../../../../../constants';
import './style.scss';

export default class Navigation extends Component {
    render = () =>

        <ul className="navigation">
            <li><Link to={URL_PATH.PRIVACY_POLICY}>Learn</Link></li>
            <li><Link to="">Invest</Link></li>
            <li><Link to="">Investor Desk</Link></li>
            <li><Link to="">Distributor Desk</Link></li>
        </ul>
}
