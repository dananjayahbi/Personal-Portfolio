import React from "react";
import { Progress } from "antd";
import { ConfigProvider } from "antd";

const Skills = () => {
  const theme = {
    token: {
      colorText: "#fff",
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#070d1b",
        minHeight: "100vh", // Adjusted height for responsiveness
        fontFamily: "sans-serif",
        padding: "50px 20px", // Adjusted padding for responsiveness
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "800px", // Set maximum width for better responsiveness
        }}
      >
        <div
          style={{
            marginBottom: "40px",
            textAlign: "center", // Centered text for responsiveness
          }}
        >
          <span
            style={{
              color: "#fec544",
              fontSize: "clamp(24px, 6vw, 32px)",
              marginBottom: "20px",
            }}
          >
            SKILLS
          </span>
          <div style={{marginTop: "30px"}}>
            <span
              style={{
                color: "#fff",
                fontSize: "clamp(20px, 4vw, 36px)",
                lineHeight: "1.2",
                textAlign: "center", // Centered text for responsiveness
              }}
            >
              All the skills that I have in that field of work are mentioned.
            </span>
          </div>
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <ConfigProvider theme={theme}>
            <span style={{ color: "#4d5154" }}>
              MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)
            </span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={80}
              size="large"
              status="active"
            />

            <span style={{ color: "#4d5154" }}>
              HTML, CSS, JavaScript, PHP, MySQL
            </span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={70}
              size="large"
              status="active"
            />

            <span style={{ color: "#4d5154" }}>Spring Boot</span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={50}
              size="large"
              status="active"
            />

            <span style={{ color: "#4d5154" }}>Figma, Adobe XD</span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={80}
              size="large"
              status="active"
            />

            <span style={{ color: "#4d5154" }}>Adobe Photoshop</span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={60}
              size="large"
              status="active"
            />

            <span style={{ color: "#4d5154" }}>Adobe Illustrator</span>
            <Progress
              style={{ marginBottom: "20px" }}
              percent={50}
              size="large"
              status="active"
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Skills;
