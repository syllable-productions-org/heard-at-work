import React from 'react';
import Menu from '../Menu';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          <section className="featured">
            <span>
              Heard at Work is a collection of things that caught my ear while working at Pentagram in <span className="no-wrap">New York</span> from <span className="no-wrap">2016–2018</span>.
            </span>
          </section>
          <div className="close-button">
            <a href="/">
              X
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
