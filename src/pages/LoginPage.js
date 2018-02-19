import React, { Component } from 'react';
import * as act from '../actions/index';
import Login from '../components/Login';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Login onLoginForm={this.onLoginForm} />
        );
    }

    onLoginForm = data => {
        this.props.onLoginForm(data);
    }

    componentWillMount() {
    }
}



const mapStateToProps = state => {
    return {
        detail: state.detail
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => {
            dispatch(act.login(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
