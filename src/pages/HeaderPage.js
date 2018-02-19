import React, { Component } from 'react';
import Header from '../components/Header';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class HeaderPage extends Component {

    componentWillMount() {

    }

    logout = () => {
        this.props.logout();
    }

    componentWillReceiveProps() {
    }


    render() {
        return (
            <div className="App">
                <Header loginForm={this.loginForm} logout={this.logout} detail={this.props.detail} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        detail: state.detail,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => {
            dispatch(act.login(data));
        },
        logout: () => {
            dispatch(act.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);
