import React, { Component } from 'react';
import Visitor from './home/Visitor';
import Student from './home/Student';
import Teacher from './home/Teacher';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: undefined,
            detail: {
                teacher: false
            }
        }
    }
    render() {
        let { users, detail } = this.state;
        let teacher = detail.teacher || false;
        return (
            <div>
                <div className="row">
                    {this.state.users !== undefined && this.state.users !== null ? this.showMenu(teacher, detail) : <Visitor />}
                </div>
            </div>
        );
    }

    showMenu = (teacher, detail) => {
        return (
            <div style={{ marginTop: 40 }}>
                {teacher === true ? <Teacher detail={detail} /> : < Student detail={detail} />}
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
}

export default Home;
