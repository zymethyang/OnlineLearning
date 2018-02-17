import React, { Component } from 'react';


class Student extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col l10 offset-l1">
                        <div className="row" style={{marginTop:40}}>
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

export default Student;
