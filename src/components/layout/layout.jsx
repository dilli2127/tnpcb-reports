import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ROUTES } from "../routes/MyRoutes";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { colorBgContainer, borderRadiusLG } = theme.useToken().token;

  const menuItems = [
   {
    icon: <UserOutlined />,
   label: "Inventory",
   key: "Inventory",
   children:[
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Products",
      url: ROUTES.PRODUCTS,
    },
   ]}, 
   
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Invoice",
      url: ROUTES.LOGIN,
    },
  
   
  ];

  return (
    <Layout>
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['Products']}
        style={{ height: '100%', borderRight: 0 ,backgroundColor:"lightskyblue"}}
      >
        {menuItems.map(item => {
          if (item.children) {
            return (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(child => (
                  <Menu.Item key={child.key}>
                    <Link to={child.url}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.url}>{item.label}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <span style={{fontWeight:"bold", fontSize:'20px'}}>HANDOUT BILLING</span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 800,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
