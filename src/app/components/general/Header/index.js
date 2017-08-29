import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Navigation from './Navigation';
import ActionMenu from './ActionMenu';
import './style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.onRouteChanged();
    }


    componentDidUpdate(prevProps) {
        // if (this.props.location !== prevProps.location) {
        //     this.onRouteChanged();
        // }
    }
    // onRouteChanged() {
    //     scrollTop();
    //     ReactGA.set({ page: window.location.pathname });
    //     ReactGA.pageview(window.location.pathname);
    // }
    //
    // showMenu = (status) => {
    //     this.setState({
    //         menuOpen: status,
    //     })
    // };
    
    render = () => {
        return (
            <header className="clearfix">
                <a href="#" className="logo"><img src="./images/logo.jpg" alt="" /></a>
                <Navigation />
                <ActionMenu />
            </header>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

