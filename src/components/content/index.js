import React from 'react';
import './index.css';
export const DisplayContent = (props) => {
  return <div className='Content'>{props.children}</div>;
};
export default DisplayContent;
