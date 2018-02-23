import React, { Component } from 'react';
const firebase = require('../../shared/firebase');

class AddClassroom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            progress: 0
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

    componentDidMount() {
        var fileButton = document.getElementById('imageUpload');

        fileButton.addEventListener('change', (e) => {
            var file = e.target.files[0];
            var storageRef = firebase.storage().ref('images/' + file.name);
            var task = storageRef.put(file);
            task.on('state_changed', snapshot => {
                this.setState({
                    progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                    image: snapshot.task.location_.path_
                })
            }, err => {
                console.log(err);
            })
        })
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
                        </form>
                    </div>
                    <div className="row">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" id="imageUpload" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>
                        <div className="progress">
                            <div className="determinate" style={{ width: `${this.state.progress}%` }}></div>
                        </div>
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
