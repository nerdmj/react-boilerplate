/**
 * Created by TTND on 8/28/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {TRANSLATIONS} from '../../../../../constants/translation';
import {URL_PATH} from '../../../../../constants';

export default class StaticFooter extends Component {
    render = () =>
        <div className="footer-bottom">
            <ul className="footer-menu">
                <li><Link to={URL_PATH.PRIVACY_POLICY}>{TRANSLATIONS.FOOTER.PRIVACY_POLICY}</Link>|</li>
                <li><a href="">{TRANSLATIONS.FOOTER.TERMS_CONDITIONS}</a>|</li>
                <li><a href="">{TRANSLATIONS.FOOTER.DISCLAIMER}</a>|</li>
                <li><a href="">{TRANSLATIONS.FOOTER.SITEMAP}</a>|</li>
                <li><a href="">{TRANSLATIONS.FOOTER.SEBI}</a>|</li>
                <li><a href="">{TRANSLATIONS.FOOTER.AMFI}</a></li>
            </ul>
            <p>Copyright 2017</p>
        </div>
}
