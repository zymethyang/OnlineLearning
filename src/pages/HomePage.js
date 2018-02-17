import React, { Component } from 'react';
import Home from '../components/Home';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:{uid:''}
        }
    }
    render() {
        return (
            <div className="App">
                <Home users={this.state.users} />
            </div>
        );
    }
    componentWillReceiveProps(){
        setTimeout(() => {
            this.setState({
                users:this.props.users
            })
        });
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
