import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {URL_PATH} from '../../../../../constants';
import './style.scss';

export default class ActionMenu extends Component {
    render = () =>
        <ul className="action-menu">
            <li><Link to={URL_PATH.PRIVACY_POLICY}><img src="./images/icons/search.png" alt="" /></Link></li>
            <li><Link to=""><img src="./images/icons/telephone.png" alt="" /></Link></li>
            <li><Link to=""><img src="./images/icons/language.png" alt="" /></Link></li>
            <li><Link to=""><img src="./images/icons/profile.png" alt="" /></Link></li>
        </ul>
}
