import React, { Component } from 'react';


class AddClassroom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: ''
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

    onSubmitClassroom = () => {
        this.props.onSubmitClassroom(this.state);
    }

    render() {
        return (
            <div id="moreClassroom" className="modal" style={{ maxWidth: 550 }}>
                <div className="modal-content">
                    <div className="row center">
                        <div className="col l8 offset-l2">
                            <h5>Add a classroom</h5>
                        </div>
                    </div>
                    <div className="row">

                        <form>
                            <div className="col l6">
                                <label>
                                    Name
                                    <input
                                        name="name"
                                        type="text"
                                        checked={this.state.id}
                                        onChange={this.handleInputChange} />
                                </label>
                            </div>
                            <div className="col l6">
                                <label>
                                    Description
                                    <input
                                        name="description"
                                        type="text"
                                        checked={this.state.id}
                                        onChange={this.handleInputChange} />
                                </label>
                            </div>
                            <label>
                                Image
                                    <input
                                    name="image"
                                    type="text"
                                    checked={this.state.id}
                                    onChange={this.handleInputChange} />
                            </label>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.onSubmitClassroom()}>Submit</a>
                </div>
            </div>
        );
    }
}

export default AddClassroom;
