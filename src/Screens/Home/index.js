import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './index.less';

export default function Home() {
  return (
    <div>
      <h1>
        Stock Prices
        <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faChartLine} />
      </h1>
      Welcome to the Stock Market Page. You may click on stocks to view all the
      stocks or search to view the latest 100 days of activity.{' '}
    </div>
  );
}
