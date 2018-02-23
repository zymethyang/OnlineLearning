import React, { Component } from 'react';
import LoginForm from './login/LoginForm';
import RegisterForm from './login/RegisterForm';
import './login/index.css';


class Login extends Component {

    componentDidMount() {
        window.$('.message a').click(function () {
            window.$('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        });
    }

    onLoginForm = (data) => {
        this.props.onLoginForm(data);
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <RegisterForm />
                    <LoginForm onLoginForm={this.onLoginForm} />
                </div>
            </div>
        );

    }




}

export default Login;
