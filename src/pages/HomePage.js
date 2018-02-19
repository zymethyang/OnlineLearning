import React, { Component } from 'react';
import Home from '../components/Home';
import * as act from '../actions/index';
import { connect } from 'react-redux';

class HomePage extends Component {

    render() {
        return (
            <div className="App">
                <Home detail={this.props.detail} course={this.props.course} />
            </div>
        );
    }

    componentWillMount() {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
