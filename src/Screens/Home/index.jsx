import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default function Home() {
  return (
    <Fragment>
      <h1>
        Stock Prices
        <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faChartLine} />
      </h1>

      <p>
        Welcome to the Stock Market Page. You may click on stocks to view all
        the stocks or search to view the latest 100 days of activity.
      </p>
    </Fragment>
  );
}
