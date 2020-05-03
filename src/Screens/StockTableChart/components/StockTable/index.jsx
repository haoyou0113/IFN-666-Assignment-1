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

  // clearAll = () => {
  //   this.setState({
  //     filteredInfo: null,
  //     sortedInfo: null,
  //   });
  // };

  // setAgeSort = () => {
  //   this.setState({
  //     sortedInfo: {
  //       order: 'descend',
  //       columnKey: 'age',
  //     },
  //   });
  // };

  return (
    <div>
      <div>{`Showing stocks for the ${props.stockName} `}</div>
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
