import React from 'react';
import Menu from '../Menu';
import './index.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="page page-contact">
        <div className="page-inner">
          <Menu />
          <section>
            <span>
              To contribute something you’ve heard at work, or just to say hi, send me an email at
            </span>
            <a href="mailto:justine.braisted@gmail.com?subject=Hello" target='_blank' rel="noopener noreferrer">justine.braisted@gmail.com</a> ).
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

export default Contact;
