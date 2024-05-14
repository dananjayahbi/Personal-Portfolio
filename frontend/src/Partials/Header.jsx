import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  const handleContactClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Header
      style={{
        backgroundColor: "transparent",
        top: "10px",
        position: "relative",
        display: "flex",
        marginBottom: "50px",
        justifyContent: "space-between",
        zIndex: 1,
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        className="custom-header"
        defaultSelectedKeys={["home"]}
        style={{
          lineHeight: "64px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Menu.Item
          key="home"
          style={{ backgroundColor: "transparent", color: "#fff" }}
        >
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item
          key="contact"
          style={{ backgroundColor: "transparent", color: "#fff" }}
          onClick={handleContactClick}
        >
          CONTACT
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
