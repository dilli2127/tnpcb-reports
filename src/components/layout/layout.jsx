// components/layout/Layout.js
import React from 'react';
import { Layout, Menu, Button, Modal } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Dashboard } from '@mui/icons-material';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = ({ children }) => {
  const navigate  = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to Logout?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleLogout(id);
      },
      onCancel() {
      },
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
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
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary" onClick={showDeleteConfirm}>
            Logout
          </Button>
        </div>
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
