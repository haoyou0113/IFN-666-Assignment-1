import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import history from './history';
import { Table } from 'antd';
import './index.css';

function TableDisplay(props) {
  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text) => {
        return (
          <Link to={'/stocktablechart'}>
            <span>{text}</span>
          </Link>
        );
      },
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
export default withRouter(TableDisplay);
