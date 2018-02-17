import React, { Component } from 'react';
import HeaderPage from './pages/HeaderPage';
import HomePage from './pages/HomePage';
import FooterPage from './pages/FooterPage';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
        <HomePage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
