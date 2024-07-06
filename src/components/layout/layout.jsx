// components/layout/Layout.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/admin">Dash Board</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="/invoice">Invoice</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link to="/admin/notifications">Notifications</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
