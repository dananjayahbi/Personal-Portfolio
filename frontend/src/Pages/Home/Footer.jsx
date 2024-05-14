import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const designerName = "Dananjaya";

    return (
        <div
          style={{
            backgroundColor: "#0a101e",
            minHeight: "20px", // Adjusted height for responsiveness
            fontFamily: "sans-serif",
            padding: "50px 20px", // Adjusted padding for responsiveness
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "25px 0 0 0"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{color: "#fff", fontSize: "14px"}}>© {currentYear}. Developed by {designerName}. All rights reserved.</p>
          </div>
        </div>
      );
};

export default Footer;
