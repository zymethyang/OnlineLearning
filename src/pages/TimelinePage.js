import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class TimelinePage extends Component {
    render() {


        return (
            <div>
                <Timeline detail={this.props.detail} course={this.props.course} />
            </div>
        );
    }

    componentWillReceiveProps() {
        var { match } = this.props;
        var id = match.params.id;
        var data = [id];
        this.props.getCourseWithID(data, this.props.token);
    }
}


const mapStateToProps = state => {
    return {
        token: state.token,
        detail: state.detail,
        course: state.course
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCourseWithID: (id, token) => {
            dispatch(act.getCourseWithID(id, token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);