import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class Timeline extends Component {
    render() {
        let { detail, course, document } = this.props;
        console.log(document)
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
                {this.renderDocument(document)}


            </div>

        );
    }

    renderDocument = (document) => {
        var result = null;
        if (document.document) {
            result = document.document.map(doc => {
                console.log(doc);
                return (
                    <div className="col l4" style={{ marginTop: 80 }}>
                        <div class="card">
                            <div class="card-image">
                                <img src="http://materializecss.com/images/sample-1.jpg" />
                                <span class="card-title">{doc.title}</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">send</i></a>
                            </div>
                            <div class="card-content">

                                <span class="row">
                                    <span class="col l3">
                                        <img src="http://materializecss.com/images/sample-1.jpg" width="100%" height="100%" style={{ borderRadius: 75 }} />
                                    </span>
                                    <h6>Tri Nguyen</h6>
                                    <p>Nội dung rất hay và bổ ích.</p>
                                </span>

                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1">Để lại bình luận</label>
                            </div>
                        </div>
                    </div>
                );
            })
        }

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

const mapStateToProps = state => {
    return {
        token: state.token,
        detail: state.detail,
        course: state.course,
        document: state.document
    }
}


export default connect(mapStateToProps, null)(Timeline);