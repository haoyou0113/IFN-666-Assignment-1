import React, { Fragment } from 'react';
import DateSearch from './components/DateSearch';
import DateTable from './components/StockTable';

export const StockTableChart = () => {
  return (
    <Fragment>
      <DateSearch />
      <DateTable />
    </Fragment>
  );
};

export default StockTableChart;
