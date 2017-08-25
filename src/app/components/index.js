import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router-dom';

import { routes, ENV_CONFIG } from '../../config';
import { createRoute } from '../../utils/routeHelper';
import Header from './general/Header';
import Footer from './general/Footer';
import Router from './Router';
import { TRANSLATIONS } from '../../constants/translations';
import customStyles from '../../scss/modalStyle';
class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    };

    render() {
        return (
            <Router>
                <div>
                    <Header translations={TRANSLATIONS} />

                    <div className="main_container">
                        <section className="body_container">
                            <Switch>
                                {createRoute(routes)}
                            </Switch>
                        </section>
                    </div>

                    <Footer />
                </div>
            </Router>)
    }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
