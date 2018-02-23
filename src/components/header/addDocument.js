import React, { Component } from 'react';
const firebase = require('../../shared/firebase');

class AddDocument extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            progress: 0,
            title: '',
            link: ''
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


    onSubmitDocument = () => {
        if (this.state.progress < 100) {
            window.Materialize.toast('You have to wait until upload finished', 4000);
        } else {
            this.props.dataDocument(this.state);
        }
    }

    componentDidMount() {
        var fileButton = document.getElementById('fileButton');

        fileButton.addEventListener('change', (e) => {
            var file = e.target.files[0];
            var storageRef = firebase.storage().ref('documents/' + file.name);
            var task = storageRef.put(file);
            task.on('state_changed', snapshot => {
                this.setState({
                    progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                    link: snapshot.task.location_.path_
                })
            }, err => {
                console.log(err);
            })
        })
    }

    render() {
        return (
            <div id="document" className="modal" style={{ maxWidth: 550 }}>
                <div className="modal-content">
                    <div className="row center">
                        <div className="col l8 offset-l2">
                            <h5>Enter classroom ID</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l12">
                            <form>
                                <label>
                                    Classroom ID
                                    <input
                                        name="id"
                                        type="text"
                                        checked={this.state.id}
                                        onChange={this.handleInputChange} />
                                </label>
                                <label>
                                    Title
                                    <input
                                        name="title"
                                        type="text"
                                        checked={this.state.title}
                                        onChange={this.handleInputChange} />
                                </label>

                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" id="fileButton" />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                    </div>
                                </div>

                                <div className="progress">
                                    <div className="determinate" style={{ width: `${this.state.progress}%` }} id="uploader"></div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.onSubmitDocument()}>Submit</a>
                </div>
            </div>
        );
    }
}

export default AddDocument;
