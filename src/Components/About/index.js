import React from 'react';
import Menu from '../Menu';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          <section>
            <span>
              Heard at Work is a collection of things that caught my ear while working at Pentagram in New York from 2016–2018.
            </span>
            <div className="close-button">
              <a href="/">
                X
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
