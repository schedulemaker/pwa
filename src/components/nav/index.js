import React, {useState} from "react";
import { Layout, Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  FilterOutlined,
  CalendarOutlined,
  LoginOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import CreateSchedules from '../create';

const { Header, Content, Footer, Sider } = Layout;

export default function Nav() {

  let [loggedIn, setLoggedIn] = useState(false);
  let [selected, setSelected] = useState('create');

  const handleLoginout = () => {
    setLoggedIn(!loggedIn);
  }

  const handleMenu = (e) => {
    setSelected(e.key)
  }

  const renderView = () => {
    switch (selected) {
      case 'create':
        
        return (<CreateSchedules/>);
      case 'view':
        return 'view';
      case 'filter':
        return 'filter';
      default:
        break;
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selected]}>
          <Menu.Item key="create" onClick={handleMenu} icon={<HomeOutlined />}>
            Create
          </Menu.Item>
          <Menu.Item key="view" onClick={handleMenu} icon={<CalendarOutlined />}>
            View
          </Menu.Item>
          <Menu.Item key="filter" onClick={handleMenu} icon={<FilterOutlined />}>
            Filter
          </Menu.Item>
          <Button type="primary" key="loginout" onClick={handleLoginout} style={{margin: "0px 16px", width: "80%"}} icon={loggedIn ? <LogoutOutlined/> : <LoginOutlined/>}>
            {loggedIn ? "Logout" : "Login"}
          </Button>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 , textAlign: "center"}}
        >
          <Typography style={{color: "white"}}>
          ScheduleMaker
          </Typography>
        </Header>
        <Content style={{ margin: "24px 24px 0" }}>
          {renderView()}
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
}
