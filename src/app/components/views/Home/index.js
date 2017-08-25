import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Home extends Component {
    componentDidMount = () => {
        

        this.loadHandler();
    };

    componentDidUpdate = (prevProps, prevState) => {
        //Triggers MDL elements sync
        // componentHandler.upgradeDom();
    }
    
    componentWillUnmount = () => {

    };

    loadHandler = () => {

    };
    render() {
        return (
        <div>Welcome !!</div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
