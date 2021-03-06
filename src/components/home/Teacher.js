import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
const firebase = require('../../shared/firebase');

class Home extends Component {
    
    componentDidMount() {
        window.$(".button-collapse").sideNav();
        window.$('.button-collapse').sideNav('show');
    }
    render() {
        let { detail, course } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col l3" style={{ marginTop: 40 }}>
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <img src={detail.image} alt="teacher icon" className="circle" />
                                <span className="title">{detail.name}</span>
                                <p>{detail.email}</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle green">home</i>
                                <span className="title">Teaching course</span>
                                <p>
                                    You are teaching {course.length} course.
                                </p>
                            </li>
                            {this.renderCourse(course)}
                        </ul>
                    </div>
                    <div className="col l9">
                        <div className="row" style={{ marginTop: 40 }}>
                            {this.renderCardCourse(course)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderCardCourse = (data) => {
        var result = null;
        result = data.map((data, index) => {
            return (
                <div className="col l4" key={index}>
                    <div className="card">
                        <Link to={`/timeline/${data.id}`}>
                            <div className="card-image">
                                <img src={data.image} />
                                <span className="card-title">{data.name}</span>
                            </div>
                            <div className="card-content">
                                <p>{data.description}</p>
                            </div>
                            <div className="card-action">
                                <h5>You need to check assignment</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            );
        })
        return result;
    }
    renderCourse = (data) => {
        var result = null;
        result = data.map((data, index) => {
            return (
                <li className="collection-item avatar" key={index}>
                    <Link to={`/timeline/${data.id}`}>
                        <span className="row">
                            <i className="material-icons circle red">insert_chart</i>
                        </span>
                        <span className="row">{data.name}</span>
                        <p>Short description about this classroom
                    </p>
                    </Link>
                </li>
            );
        })
        return result;
    }
}

export default Home;
