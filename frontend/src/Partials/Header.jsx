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
        // height: "auto",
        justifyContent: "space-between",
        zIndex: 1,
      }}
    >
      <div>
        <a href="/">
          <img
            src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"
            width="80px"
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
        </a>
      </div>
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
