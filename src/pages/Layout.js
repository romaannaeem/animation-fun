import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  BuildOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export default function MainLayout(props) {
  return (
    <Layout>
      <Sider
        className="site-layout-background"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {}}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<BuildOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="3" icon={<InfoCircleOutlined />}>
            Help & Contact
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        ></Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: '80vh' }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
