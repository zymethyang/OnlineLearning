import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'Enter your email',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <form className="register-form">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>create</button>
                <p className="message">Already registered? <a href="#">Sign In</a></p>
            </form>
        );

    }


}

export default RegisterForm;
