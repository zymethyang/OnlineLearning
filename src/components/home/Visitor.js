import React, { Component } from 'react';


class Visitor extends Component {

    componentDidMount() {
        window.$(document).ready(function () {
            window.$('.parallax').parallax();
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="parallax-container">
                        <div className="parallax"><img src="./assets/images/background1.jpg" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col l3">
                        <img src="./assets/images/background2.jpg" alt="background 2" width="100%" height="100%"/>
                    </div>
                    <div className="col l3">
                        <img src="./assets/images/background3.jpg" alt="background 3" width="100%" height="100%"/>
                    </div>
                    <div className="col l3">
                        <img src="./assets/images/background4.jpg" alt="background 4" width="100%" height="100%"/>
                    </div>
                    <div className="col l3">
                        <img src="./assets/images/background5.jpg" alt="background 5" width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Visitor;
