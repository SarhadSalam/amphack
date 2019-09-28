import { Button, Form, Icon, Input } from "antd";
import React from "react";

import { convert } from "src/utils/convertToHello";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
