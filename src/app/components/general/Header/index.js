import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import {URL} from '../../../../constants/routes';
//Importing Styles
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
        <span>Header Section</span>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

