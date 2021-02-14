import './style.less';

import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { faFire, faHome } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { NAME_APP } from 'constants/application';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const { Header, Sider, Content, Footer } = Layout;

const index = ({ children, title = NAME_APP }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout className="h-screen">
        <Sider
          onBreakpoint={(broken) => setCollapsed(broken)}
          trigger={null}
          collapsible
          breakpoint="lg"
          collapsed={collapsed}
          style={{ background: '#212121' }}
        >
          <div className="flex flex-row items-center h-16 pl-3 bg-white">
            <FontAwesomeIcon color="red" size="4x" icon={faYoutube} />
            {!collapsed && (
              <div className="text-gray mx-2 text-lg leading-tight font-extrabold">
                {title}
              </div>
            )}
          </div>
          <Menu
            theme="dark"
            style={{ background: '#212121' }}
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<FontAwesomeIcon icon={faHome} />}>
              Início
            </Menu.Item>
            <Menu.Item key="2" icon={<FontAwesomeIcon icon={faFire} />}>
              Em Alta
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <MenuFoldOutlined
                className="trigger"
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Clone YouTube Nextjs/Antd ©2021 Created by Igor Rocha
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default index;
