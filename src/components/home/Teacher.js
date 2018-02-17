import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col l10 offset-l1">
                        <div className="row" style={{marginTop:40}}>
                            <div className="col l4">
                                <div class="card">
                                    <div class="card-image">
                                        <img src="http://materializecss.com/images/sample-1.jpg" />
                                    <span class="card-title">Class One</span>
                                    </div>
                                    <div class="card-content">
                                        <p>News notification</p>
                                    </div>
                                    <div class="card-action">
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

export default Home;
