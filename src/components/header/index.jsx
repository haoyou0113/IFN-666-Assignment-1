import React from 'react';
import NavTop from './components/nav';
import './index.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <NavTop></NavTop>
      </div>
    );
  }
}
