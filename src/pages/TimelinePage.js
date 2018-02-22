import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class TimelinePage extends Component {
    render() {
        var { match } = this.props;
        var id = match.params.id;

        return (
            <div>
                <Timeline detail={this.props.detail} course={this.props.course} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        detail: state.detail,
        course: state.course
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);
