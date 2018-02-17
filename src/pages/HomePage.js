import React, { Component } from 'react';
import Home from '../components/Home';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: { uid: '' }
        }
    }

    render() {
        return (
            <div className="App">
                <Home users={this.props.users} detail={this.props.detail} />
            </div>
        );
    }

    componentWillMount() {
        setTimeout(() => {
            if (this.props.users) {
                this.props.getDetailUser(this.props.users.uid);
            }
        }, 1000)
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
