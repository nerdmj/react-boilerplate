/**
 * Created by TTND on 8/28/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {TRANSLATIONS} from '../../../../../constants/translation';

export default class StaticFooter extends Component {
    render = () =>
        <div className="footer-bottom">
            <ul className="footer-menu">
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.PRIVACY_POLICY}</a>|</li>
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.TERMS_CONDITIONS}</a>|</li>
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.DISCLAIMER}</a>|</li>
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.SITEMAP}</a>|</li>
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.SEBI}</a>|</li>
                <li><a target="_blank" href="">{TRANSLATIONS.FOOTER.AMFI}</a></li>
            </ul>
            <p>Copyright 2017</p>
        </div>

}
