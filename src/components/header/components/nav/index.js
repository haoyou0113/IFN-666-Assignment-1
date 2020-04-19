import React, { useState, useEffect } from 'react';
import MenuConfig from '../../../../config/menuConfig';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

// import './index.less';

export default function NavTop() {
  const [Menu, setMenu] = useState(MenuConfig);

  if (Menu) {
    return (
      <Nav defaultActiveKey='/home' as='ul'>
        {Menu.map((item) => {
          return (
            <Nav.Item as='li'>
              <Nav.Link href={item.key}>{item.title}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    );
  } else {
    return <div>Render failed</div>;
  }
}
