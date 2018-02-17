import React, { Component } from 'react';
import Visitor from './home/Visitor';
import Student from './home/Student';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: undefined
        }
    }
    render() {
        console.log(this.props.users.uid)
        return (
            <div>
                <div className="row">
                    {this.state.users !== undefined ? <Student /> : <Visitor />}
                </div>
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
}

export default Home;
