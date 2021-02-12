import './style.less';

import { Breadcrumb, Layout, Menu } from 'antd';

import Head from 'next/head';

const { Header, Content, Footer } = Layout;

const index = ({ children, title = process.env.NEXT_PUBLIC_NAME_APP }) => (
  <>
    <Head>
      <title>{title}</title>

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>

    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Clone Youtube ©2021 Created by Igor Rocha
      </Footer>
    </Layout>
  </>
);

export default index;
