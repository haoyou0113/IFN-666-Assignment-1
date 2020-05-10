import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import './index.css';

function TableDisplay(props) {
  const columns = [
    {
      title: props.data.length < props.originData.length ? 'Stock' : 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: (a, b) => a.symbol.length - b.symbol.length,
      render: (text) => {
        return (
          <Link to={`/stocktablechart?${text}`}>
            <span>{text}</span>
          </Link>
        );
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
      sorter: (a, b) => a.industry.length - b.industry.length,
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
