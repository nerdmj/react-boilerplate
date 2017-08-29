import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router-dom';


import Header from './general/Header';
import Footer from './general/Footer';
import { routes, ENV_CONFIG } from '../../config';
import { createRoute } from '../../utils/routeHelper';
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
                <div className="wrapper">
                    <Header />

                    <section className="mainCtrl clearfix">
                        <Switch>
                            {createRoute(routes)}
                        </Switch>
                    </section>

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
