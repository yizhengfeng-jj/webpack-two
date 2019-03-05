import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Discover from '../Discover';
import Visilize from '../Visilize';
import Dashboard from '../Dashboard';
import Data from '../Data';
import Alarm from '../Alarm';
import './index.less';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  shouldComponentUpdate() {}

  render() {
    return (
      <Layout className="home-component">
        <Header />
        <Layout>
          <Sider theme="dark">
            <Menu className="menu">
              <Menu.Item>
                <NavLink to="/home/discover">搜索</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/home/visilize">可视化</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/home/dashboard">仪表盘</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/home/data">数据源</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/home/alarm">警告</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/machine">机器学习</NavLink>
              </Menu.Item>
              <SubMenu title={<span>管理</span>}>
                <Menu.Item>
                  <NavLink to="/authority-manage">
                    权限管理
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/role-manage">
                    角色管理
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/leaver">全责分离</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Route path="/home/discover" component={Discover} />
            <Route path="/home/visilize" component={Visilize} />
            <Route path="/home/dashboard" component={Dashboard} />
            <Route path="/home/data" component={Data} />
            <Route path="/home/alarm" component={Alarm} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
