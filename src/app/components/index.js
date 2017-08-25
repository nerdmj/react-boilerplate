import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router-dom';

import { routes, ENV_CONFIG } from '../../config';
import { createRoute } from '../../utils/routeHelper';
import Header from './general/Header';
import Footer from './general/Footer';
import Router from './Router';

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
                    <Header />

                    <div className="main_container">
                        <Switch>
                            {createRoute(routes)}
                        </Switch>
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
