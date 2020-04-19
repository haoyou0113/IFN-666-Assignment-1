import React from 'react';
import NavTop from './components/nav';
import './index.less';
// import Util from '../../utils/utils';
// import axios from '../../axios';
export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <NavTop></NavTop>
      </div>
    );
  }
}
