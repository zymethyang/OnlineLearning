import React, { Component, View } from 'react';
import ClassroomID from './header/classroomID';
import AddClassroom from './header/addClassroom';

class Header extends Component {

    componentWillMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }

    openClassroomModal = () => {
        window.$('#classroom').modal('open');
    }

    addClassroom = () => {
        window.$('#moreClassroom').modal('open');
    }


    logout = (data) => {
        this.props.logout();
    }

    submitSendId = (id) => {
        this.props.submitSendId(id);
    }

    onSubmitClassroom = (data) => {
        this.props.onSubmitClassroom(data);
    }

    render() {
        let detail = this.props.detail;
        return (
            <div>
                <nav style={{ backgroundImage: 'none', backgroundColor: 'rgba(0,0,0,0.3)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
                    <div>
                        <a className="brand-logo">Online Learning App</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.props.detail.uid !== undefined && this.props.detail.uid !== null ?
                                <li onClick={() => this.logout()}><a>Logout</a></li>
                                :
                                <li></li>
                            }
                            <li onClick={() => this.addClassroom()}><a>Add a classroom</a></li>
                            <li onClick={() => this.openClassroomModal()}><a>Join a classroom</a></li>
                        </ul>
                    </div>
                </nav>
                <ClassroomID submitSendId={this.submitSendId} />
                <AddClassroom onSubmitClassroom={this.onSubmitClassroom} />
            </div>
        );
    }
}

export default Header;
