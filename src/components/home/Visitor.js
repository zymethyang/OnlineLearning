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
            </div>
        );
    }
}

export default Visitor;
