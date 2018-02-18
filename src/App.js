import React, { Component } from 'react';
import HeaderPage from './pages/HeaderPage';
import HomePage from './pages/HomePage';
import FooterPage from './pages/FooterPage';
import TimelinePage from './pages/TimelinePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderPage />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path="/timeline/:slug" component={TimelinePage} />>
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
