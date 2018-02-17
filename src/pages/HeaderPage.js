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
        setTimeout(() => {
            if (this.props.users) {
                this.props.getDetailUser(this.props.users.uid);
            }
        }, 1000)
    }

    logout = () => {
        this.props.logout();
        this.state.users = undefined;
    }

    render() {
        return (
            <div className="App">
                <Header loginForm={this.loginForm} users={this.state.users} logout={this.logout} detail={this.state.detail} />
            </div>
        );
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                users: this.props.users,
                detail: this.props.detail
            })
        })
    }

    loginForm = (data) => {
        this.props.login(data);
    }
}


const mapStateToProps = state => {
    return {
        users: state.users,
        detail: state.detail
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
        },
        getDetailUser: (uid) => {
            dispatch(act.getDetailUser(uid));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);

