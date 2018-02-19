import React, { Component } from 'react';



class LoginForm extends Component {
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

    onLoginForm = () => {
        this.props.onLoginForm(this.state);
    }

    render() {
        return (
            <div className="login-form">
                <input type="email" name="email" onChange={this.handleInputChange} value={this.state.email} />
                <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                <button onClick={() => this.onLoginForm()}>login</button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
            </div>
        );

    }


}

export default LoginForm;
