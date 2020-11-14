import React, {useState} from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  FilterOutlined,
  CalendarOutlined,
  LoginOutlined,
  LogoutOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function App() {

  let [loggedIn, setLoggedIn] = useState(false);

  const handleLoginout = () => {
    setLoggedIn(!loggedIn);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["create"]}>
          <Menu.Item key="create" icon={<HomeOutlined />}>
            Create
          </Menu.Item>
          <Menu.Item key="view" icon={<CalendarOutlined />}>
            View
          </Menu.Item>
          <Menu.Item key="filter" icon={<FilterOutlined />}>
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
        <Content style={{ margin: "24px 16px 0" }}>

        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
}
