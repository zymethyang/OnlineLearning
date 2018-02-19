import React, { Component } from 'react';
import Teacher from './home/Teacher';


class Home extends Component {

    componentWillMount() {
        window.$("body").css("background:white");
    }

    constructor(props) {
        super(props);
        this.state = {
            users: undefined,
            detail: {},
            course: [{ _id: null, id: null, name: null, description: null, image: null, startedAt: null, updatedAt: null, __v: 0, document: [], stream: [], member: [] }]
        }
    }

    render() {
        let { detail, course } = this.state;
        return (
            <div>
                <div className="row">
                    {this.showMenu(detail, course)}
                </div>
            </div>
        );
    }

    showMenu = (detail, course) => {
        return (
            <div style={{ marginTop: 40 }}>
                <Teacher detail={detail} course={course} />
            </div>
        );
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                course: this.props.course,
                detail: this.props.detail
            })
        })
    }
}

export default Home;
