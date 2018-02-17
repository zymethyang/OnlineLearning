import React, { Component } from 'react';
import Header from '../components/Header';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class HeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    componentWillMount() {
        this.props.getCurrentUser();
    }

    logout = () => {
        console.log('logout')
        this.props.logout();
        this.state.users = undefined;
    }

    render() {
        return (
            <div className="App">
                <Header loginForm={this.loginForm} users={this.state.users} logout={this.logout} />
            </div>
        );
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                users: this.props.users
            })
        })
    }

    loginForm = (data) => {
        this.props.login(data);
    }
}


const mapStateToProps = state => {
    return {
        users: state.users
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => {
            dispatch(act.login(data));
        },
        getCurrentUser: () => {
            dispatch(act.getCurrentUser());
        },
        logout: () => {
            dispatch(act.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);

