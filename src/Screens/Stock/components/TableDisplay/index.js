import React from 'react';

import { Table } from 'antd';
import './index.css';

export default function TableDisplay(props) {
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

  return (
    <Table
      columns={columns}
      dataSource={props.data.length > 0 ? props.data : props.originData}
      loading={props.loading}
    />
  );
}
