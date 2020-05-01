import React from 'react';
import { DatePicker, Form, Button, Input } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 5,
  },
};

const DateSearch = () => {
  const [form] = Form.useForm();
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.

    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    };
    console.log('Received values of form: ', values);
  };
  const onReset = () => {};
  return (
    <Form
      {...layout}
      form={form}
      name='control-hooks'
      layout='horizontal'
      onFinish={onFinish}
    >
      <Form.Item name='date-picker' label='' {...config}>
        <DatePicker format='YYYY-MM-DD' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DateSearch;
