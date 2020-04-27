import React from 'react';
import { Form, Select, Button } from 'antd';
import './index.css';

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
  const { symbol } = props;

  console.log('symbol', symbol);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    props.Searching(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const renderOptions = () =>
    symbol.map((item) => {
      return (
        <Option value={item.symbol} key={item.symbol}>
          {item.symbol}
        </Option>
      );
    });
  return (
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
        <Select placeholder='-----' allowClear>
          {renderOptions()}
        </Select>
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
  );
}
