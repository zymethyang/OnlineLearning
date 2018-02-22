import React, { Component } from 'react';

import HeaderPage from './pages/HeaderPage';
import HomePage from './pages/HomePage';
import FooterPage from './pages/FooterPage';
import TimelinePage from './pages/TimelinePage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as act from './actions/index';
import { connect } from 'react-redux';

class App extends Component {


  onLoginForm = data => {
    this.props.login(data);
  }


  render() {
    return (
      <Router>
        <div>
          {this.props.detail.uid === null ? <LoginPage onLoginForm={this.onLoginForm} /> :
            <div>
              <HeaderPage />
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path="/timeline/:id" component={TimelinePage} />>
                </Switch>
              <FooterPage />
            </div>
          }
        </div>
      </Router>
    );
  }

  componentWillMount() {
    this.props.getIdToken();
    setTimeout(() => {
      this.props.getDetailUser(this.props.token);
      setTimeout(() => {
        this.props.getCourseByUser(this.props.detail.course, this.props.token);
      }, 500)
    }, 1000)
  }
}



const mapStateToProps = state => {
  return {
    token: state.token,
    detail: state.detail
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (data) => {
      dispatch(act.login(data));
    },
    getIdToken: () => {
      dispatch(act.getToken());
    },
    getDetailUser: (token) => {
      dispatch(act.getDetailUser(token));
    },
    getCourseByUser: (data, token) => {
      dispatch(act.getCourseByUser(data, token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

