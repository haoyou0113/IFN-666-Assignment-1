import React from 'react';
import { Table } from 'antd';
export const StockTable = (props) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Open',
      dataIndex: 'open',
      sorter: (a, b) => a.open - b.open,
    },
    {
      title: 'High',
      dataIndex: 'high',
      sorter: (a, b) => a.high - b.high,
    },
    {
      title: 'Low',
      dataIndex: 'low',
      sorter: (a, b) => a.low - b.low,
    },
    {
      title: 'Close',
      dataIndex: 'close',
      sorter: (a, b) => a.close - b.close,
    },
    {
      title: 'Volumes',
      dataIndex: 'volumes',
      sorter: (a, b) => a.volumes - b.volumes,
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <div style={{ margin: 10 }}>
        Showing stocks for the <b>{props.stockName}</b>{' '}
      </div>
      <Table
        columns={columns}
        dataSource={props.data}
        size='middle'
        onChange={onChange}
      />
    </div>
  );
};
export default StockTable;
