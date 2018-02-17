import React, { Component, View } from 'react';
import LoginForm from './header/loginForm';
import RegisterForm from './header/registerForm';
import ClassroomID from './header/classroomID';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                users: this.props.users
            })
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    componentWillMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }

    openMenuModal = () => {
        window.$('#menuModal').modal('open');
    }

    openRegisterModal = () => {
        window.$('#register').modal('open');
    }

    openClassroomModal = () => {
        window.$('#classroom').modal('open');
    }

    loginForm = (data) => {
        this.props.loginForm(data);
    }

    logout = (data) => {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <nav style={{ backgroundColor: '#870B98' }}>
                    <div className="nav-wrapper">
                        <a className="brand-logo">Online Learning App</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                            {this.state.users !== undefined ?
                                <li onClick={() => this.logout()}><a>Logout</a></li>
                                :
                                [<li onClick={() => this.openMenuModal()} key={1}><a>Login</a></li>,
                                <li onClick={() => this.openRegisterModal()} key={2}><a>Register</a></li>]

                            }


                            <li onClick={() => this.openClassroomModal()}><a>Join a classroom</a></li>
                        </ul>
                    </div>
                </nav>
                <LoginForm loginForm={this.loginForm} />

                <RegisterForm />
                <ClassroomID />

            </div>
        );
    }
}

export default Header;
