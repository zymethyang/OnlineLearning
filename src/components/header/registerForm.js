import React, { Component } from 'react';


class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            img: ''
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


    componentWillMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }

    onSubmitRegistor = () => {
        this.props.onSubmitRegistor(this.state);
    }

    openRegisterModal = () => {
        window.$('#register').modal('open');
    }

    render() {
        return (
            <div id="register" className="modal" style={{ maxWidth: 500 }}>
                <div className="modal-content">
                    <div className="row center">
                        <div className="col l8 offset-l2">
                            <h3>Register Form</h3>
                        </div>
                    </div>
                    <div className="row">
                        <form>
                            <div className="col l6">
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input
                                        name="email"
                                        type="text"
                                        checked={this.state.email}
                                        onChange={this.handleInputChange} />
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className="col l6">
                                <div className="input-field">
                                    <i className="material-icons prefix">vpn_key</i>
                                    <input
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                    <label>Password</label>
                                </div>
                            </div>
                            <div className="col l6">
                                <div className="input-field">
                                    <i className="material-icons prefix">account_box</i>
                                    <input
                                        name="name"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                    <label>Your name</label>
                                </div>
                            </div>
                            <div className="col l6">
                                <div className="input-field">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input
                                        name="img"
                                        type="text"
                                        value={this.state.img}
                                        onChange={this.handleInputChange} />
                                    <label>Avatar</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.onSubmitRegistor()}>Submit</a>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
