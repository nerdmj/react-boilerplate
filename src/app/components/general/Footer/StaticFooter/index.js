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
                <li><Link to="">{TRANSLATIONS.FOOTER.TERMS_CONDITIONS}</Link>|</li>
                <li><Link to="">{TRANSLATIONS.FOOTER.DISCLAIMER}</Link>|</li>
                <li><Link to="">{TRANSLATIONS.FOOTER.SITEMAP}</Link>|</li>
                <li><Link to="">{TRANSLATIONS.FOOTER.SEBI}</Link>|</li>
                <li><Link to="">{TRANSLATIONS.FOOTER.AMFI}</Link></li>
            </ul>
            <p>Copyright 2017</p>
        </div>
}
