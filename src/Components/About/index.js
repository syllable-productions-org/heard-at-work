import React from 'react';
import Menu from '../Menu';
import CloseButton from '../CloseButton';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          <section className="featured">
            <h2>
              Heard at Work is a collection of overheard exclamations that aims to capture what it’s like to work in a New York design studio.
            </h2>
            <span className="small-text">
              Created by <a href="https://justinebraisted.com/">Justine Braisted</a> in 2018. Site development by <a href="https://www.syllable.productions/">Syllable</a>.
            </span>
          </section>
          <CloseButton />
        </div>
      </div>
    );
  }
}

export default About;
