import React, { useState } from 'react';
import MenuConfig from '../../../../config/menuConfig';
import Nav from 'react-bootstrap/Nav';
import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function NavTop() {
  const [Menu, setMenu] = useState(MenuConfig);

  if (Menu) {
    return (
      <Nav defaultActiveKey='/home' as='ul'>
        {Menu.map((item) => {
          return (
            <Link to={item.key} key={item.key}>
              <Nav.Item
                as='li'
                className='menuItem'
                style={{ margin: 5, color: 'black' }}
              >
                {item.title}
              </Nav.Item>
            </Link>
          );
        })}
      </Nav>
    );
  } else {
    return <div>Render failed</div>;
  }
}
