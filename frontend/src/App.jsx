import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./Pages/Home/Home";
import Test1 from "./Pages/Tests/test1";

const App = () => {
  const theme = {
    token: {
      // Seed Token
      colorPrimary: "#fec544",

      // Alias Token
      colorBgContainer: "#fff",
    },
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position with a delay
  const updateMousePositionWithDelay = (event) => {
    setTimeout(() => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }, 150); // Adjust the delay time as needed
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePositionWithDelay);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", updateMousePositionWithDelay);
    };
  }, []);

  return (
    <>
      <div>
        <ConfigProvider theme={theme}>
          {/* <div
            className="mouse-tracker"
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#fec544",
              left: mousePosition.x - 5,
              top: mousePosition.y - 5,
              pointerEvents: "none",
              transition: "ease",
            }}
          ></div> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/test1" element={<Test1 />} />
          </Routes>
        </ConfigProvider>
      </div>
    </>
  );
};

export default App;
