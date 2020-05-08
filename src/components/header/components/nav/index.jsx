import React, { useState, Fragment } from 'react';
import MenuConfig from '../../../../config/menuConfig';
import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default function NavTop() {
  const [current, setCurrent] = useState('/home');
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  if (MenuConfig) {
    return (
      <Fragment>
        <div className='logo' />
        <Menu
          onClick={handleClick}
          selectedKeys={current}
          mode='horizontal'
          className='navTop'
        >
          {MenuConfig.map((item) => {
            return (
              <Menu.Item key={item.key} className='menuItem'>
                <Link to={item.key} key={item.key}>
                  {item.title}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Fragment>
    );
  } else {
    return <div>Render failed</div>;
  }
}
