import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./Pages/Home/Home";
import Test1 from "./Pages/Tests/test1";
import LowWidth from "./Pages/Home/LowWidth";

const App = () => {
  const [isLowWidth, setIsLowWidth] = useState(false);

  const theme = {
    token: {
      colorPrimary: "#fec544",
      colorBgContainer: "#fff",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      const deviceWidth = window.innerWidth;
      if (deviceWidth < 1300) {
        setIsLowWidth(true);
      } else {
        setIsLowWidth(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePositionWithDelay = (event) => {
    setTimeout(() => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }, 150);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePositionWithDelay);

    return () => {
      window.removeEventListener("mousemove", updateMousePositionWithDelay);
    };
  }, []);

  return (
    <>
      <div>
        <ConfigProvider theme={theme}>
          {!isLowWidth ? (
            <>
              <div
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
              ></div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/test1" element={<Test1 />} />
              </Routes>
            </>
          ) : (
            <LowWidth />
          )}
        </ConfigProvider>
      </div>
    </>
  );
};

export default App;
