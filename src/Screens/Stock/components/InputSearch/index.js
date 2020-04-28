import React, { Fragment } from 'react';
import { Form, Select, Button, Input } from 'antd';

import './index.css';
const { Search } = Input;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function InputSearch(props) {
  const { SearchingIndustry } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    props.Searching(values);
  };
  const onReset = () => {
    form.resetFields();
    props.reSet();
  };

  return (
    <Fragment>
      <Form
        {...layout}
        form={form}
        name='control-hooks'
        layout='horizontal'
        onFinish={onFinish}
      >
        <Form.Item
          name='Symbol'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder='-----------'
            onSearch={(value) => onFinish(value)}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button htmlType='button' onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      <Search onSearch={(value) => props.SearchingIndustry(value)} />
    </Fragment>
  );
}
