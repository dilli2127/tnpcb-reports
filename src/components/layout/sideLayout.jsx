// components/layout/Layout.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Dashboard } from '@mui/icons-material';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<Dashboard />}>
            <Link to="/over-all-dashboard">Over All Dash Board</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="/invoice">Invoice</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link to="/promotion">Promotion</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="1"><Link to="/user/profile">Profile</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/user/settings">Settings</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Dashboard">
              <Menu.Item key="3"><Link to="/dashboard/overview">Overview</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/stats">Stats</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Notifications">
              <Menu.Item key="5"><Link to="/notifications/all">All Notifications</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/notifications/settings">Settings</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
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
