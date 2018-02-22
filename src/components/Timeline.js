import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
class Timeline extends Component {
    render() {
        let { detail, course } = this.props;
        console.log(detail, course);
        return (
            <div className="row">
                <div className="col l3" style={{ marginTop: 80 }}>
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
                <div className="col l9" style={{ marginTop: 80 }}>
                   
                </div>
            </div>

        );
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
                        {/*
                <span className="row">
                    <i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i>
                </span>
                */}
                        <p>Short description about this classroom
                    </p>
                    </Link>
                </li>
            );
        })
        return result;
    }



}


export default Timeline;
