import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div className="App">
        <footer className="page-footer" style={{ backgroundColor: '#870B98' }}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
