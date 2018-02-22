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

    render() {
        return (
            <div className="App">
                <Header loginForm={this.loginForm} logout={this.logout} detail={this.props.detail} submitSendId={this.submitSendId} onSubmitClassroom={this.onSubmitClassroom} />
            </div>
        );
    }

    submitSendId = (data) => {
        console.log(data);
    }

    onSubmitClassroom = data => {
        this.props.postCource(data, this.props.token);
    }

}


const mapStateToProps = state => {
    return {
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
        postCource: (data, token) => {
            dispatch(act.postCourse(data, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);
