import React from 'react';

import { Table } from 'antd';
import './index.css';

export default function TableDisplay(props) {
  console.log(props.loading);
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
    },
  ];
  const data = [
    {
      key: '1',
      symbol: 'John Brown',
      name: 32,
      industry: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      symbol: 'Jim Green',
      name: 42,
      industry: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      symbol: 'Joe Black',
      name: 32,
      industry: 'Sidney No. 1 Lake Park',
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={props.searchData.length > 1 ? props.searchData : props.data}
      loading={props.loading}
    />
  );
}
