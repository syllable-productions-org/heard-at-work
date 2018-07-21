import React from 'react';
import './index.scss';

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Menu;
