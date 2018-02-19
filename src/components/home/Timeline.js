import React, { Component } from 'react';

class Timeline extends Component {
    render() {
        let { detail } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col l3" style={{ marginTop: 40 }}>
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <img src={detail.img} alt="teacher icon" className="circle" />
                                <span className="title">{detail.name}</span>
                                <p>{detail.email}</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle green">home</i>
                                <span className="title">Homework</span>
                                <p>
                                    3 Homework need complete.
                                </p>
                            </li>
                            <li className="collection-item avatar">
                                <span className="row">
                                    <i className="material-icons circle red">insert_chart</i>
                                </span>
                                <span className="row">Classroom 1</span>
                                <span className="row">
                                    <i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i>
                                </span>
                                <p>Short description about this classroom
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col l9">
                        <div className="row" style={{ marginTop: 40 }}>
                            <div className="col l4">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="http://materializecss.com/images/sample-1.jpg" />
                                        <span className="card-title">Class One</span>
                                    </div>
                                    <div className="card-content">
                                        <p>News notification</p>
                                    </div>
                                    <div className="card-action">
                                        <a>You have an assignment need to completed</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;
