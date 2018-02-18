import React, { Component } from 'react';


class addClassroom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
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


    componentWillMount() {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }

    openClassroomModal = () => {
        window.$('#classroom').modal('open');
    }

    render() {
        return (
            <div id="classroom" className="modal" style={{ maxWidth: 550 }}>
                <div className="modal-content">
                    <div className="row center">
                        <div className="col l8 offset-l2">
                            <h5>Enter classroom ID</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l10 offset-l1">
                            <form>
                                <label>
                                    Classroom ID
                                    <input
                                        name="id"
                                        type="text"
                                        checked={this.state.id}
                                        onChange={this.handleInputChange} />
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l10 offset-l1">
                            <form>
                                <label>
                                    Classroom ID
                                    <input
                                        name="id"
                                        type="text"
                                        checked={this.state.id}
                                        onChange={this.handleInputChange} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.onSubmitRegistor()}>Submit</a>
                </div>
            </div>
        );
    }
}

export default addClassroom;
