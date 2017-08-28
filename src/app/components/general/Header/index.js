import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

//import './style.scss';

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
            <header>
                <a href="#" className="logo"><img src="./images/logo.jpg" alt="" /></a>
                <div className="navbar">
                    <ul>
                        <li>Learn</li>
                        <li>Invest</li>
                        <li>Investor</li>
                        <li>Desk</li>
                        <li>Distributor</li>
                        <li>Desk</li>
                    </ul>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

