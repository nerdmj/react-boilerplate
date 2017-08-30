import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Helmet} from "react-helmet";

import './style.scss';

class PrivacyPolicy extends Component {
    render() {
        console.log("LOADED.........");
        return (
            <div>
                Privacy Policy !!

                <Helmet>
                    <style type="text/css">{`
                        body {
                            background: #ffffff;
                        }
                    `}</style>
                </Helmet>

            </div>
        );
    }
}

export default PrivacyPolicy;
