import React, { Component } from 'react';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class SlashScreenPage extends Component {
    render() {
        return (
            <div>
                this is slashscreen page
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        users: state.users,
        detail: state.detail,
        token: state.token
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => {
            dispatch(act.login(data));
        },
        logout: () => {
            dispatch(act.logout());
        },
        getDetailUser: (token) => {
            dispatch(act.getDetailUser(token));
        },
        getIdToken: () => {
            dispatch(act.getToken());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlashScreenPage);
