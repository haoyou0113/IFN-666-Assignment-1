import React, { Fragment, useEffect, useState } from 'react';
import DateSearch from './components/DateSearch';
import DateTable from './components/StockTable';
import LineChart from './components/StockChart';
import { Alert } from 'antd';
import moment from 'moment';
const URL = {
  stockHistory: 'http://131.181.190.87:3001/history?symbol=',
  stockHistoryDate:
    'http://131.181.190.87:3001/history?symbol=xxx&from=yyyy-mm-dd',
};
export const StockTableChart = (props) => {
  const stockSymbol = props.location.search.substr(1);
  const [stockData, setStockData] = useState([]);
  const [stockName, setStockName] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(`http://131.181.190.87:3001/history?symbol=${stockSymbol}`)
      .then((res) => res.json())

      .then((data) =>
        data.map((item) => {
          return {
            key: item.timestamp,
            date: moment(item.timestamp).format('DD/MM/YYYY'),
            name: item.name,
            open: item.open,
            high: item.high,
            low: item.low,
            close: item.close,
            volumes: parseInt(item.volumes).toLocaleString(),
          };
        })
      )

      .then((data) => {
        setStockData(data);
        setStockName(data[0].name);
      });
  }, []);

  const dateSearching = (value) => {
    fetch(
      `http://131.181.190.87:3001/history?symbol=${stockSymbol}&from=${value}`
    )
      .then((res) => {
        if (res.status === 400) {
          setErr(true);
          return [];
        } else {
          setErr(false);
          return res.json();
        }
      })
      .then((data) =>
        data.map((item) => {
          return {
            key: item.timestamp,
            date: moment(item.timestamp).format('DD/MM/YYYY'),
            name: item.name,
            open: item.open,
            high: item.high,
            low: item.low,
            close: item.close,
            volumes: parseInt(item.volumes).toLocaleString(),
          };
        })
      )

      .then((data) => {
        setStockData(data);
      });
  };
  return (
    <Fragment>
      <DateSearch dateSearching={dateSearching} />
      <Alert
        message='Error'
        description='The date exceeded the date range, please try again'
        type='error'
        closable
        style={{ display: err ? 'block' : 'none' }}
      ></Alert>
      <DateTable data={stockData} stockName={stockName} />
      <LineChart data={stockData} />
    </Fragment>
  );
};

export default StockTableChart;
