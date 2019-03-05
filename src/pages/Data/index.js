import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import LocalUpdata from './LocalUpdata';
import Agent from './Agent';
import DataInput from './DataInput';
import './index.less';

class Data extends React.Component {
  shouldComponentUpdate() {}

  render() {
    return (
      <div className="data-component">
        <Menu mode="horizontal">
          <Menu.Item key="local-updata">
            <Icon type="appstore" />
            <NavLink to="/home/data/local-updata" className="href-style">
              本地上传
            </NavLink>
          </Menu.Item>
          <Menu.Item key="agent">
            <Icon type="appstore" />
            <NavLink to="/home/data/agent" className="href-style">
              agnet管理
            </NavLink>
          </Menu.Item>
          <Menu.Item key="data-input">
            <Icon type="appstore" />
            <NavLink to="/home/data/data-input" className="href-style">
              数据输入
            </NavLink>
          </Menu.Item>
        </Menu>
        <div>
          <Route
            path="/home/data/local-updata"
            component={LocalUpdata}
          />
          <Route
            path="/home/data/agent"
            component={Agent}
          />
          <Route
            path="/home/data/data-input"
            component={DataInput}
          />
        </div>
      </div>
    );
  }
}

export default Data;
