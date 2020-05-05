import React, { Fragment } from 'react';
import { Form, Button, Input } from 'antd';
import './index.css';
import { Select } from 'antd';

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
  const { SearchingIndustry, searchStock, originData } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    searchStock(values);
  };
  const onReset = () => {
    form.resetFields();
    props.reSet();
  };
  function onChange(value) {
    SearchingIndustry(value);
  }
  const industry = [...new Set(originData.map((item) => item.industry))];
  // filter repeated industry name
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

      <Select
        className='stockIndustry'
        showSearch
        style={{ width: 200 }}
        placeholder='Select a Industry'
        optionFilterProp='children'
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        allowClear
      >
        {industry.map((item) => {
          return (
            <Option key={item} value={item}>
              {item}
            </Option>
          );
        })}
      </Select>
    </Fragment>
  );
}
