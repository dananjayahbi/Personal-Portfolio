import React from "react";
import profilePic from "../../Images/profile-pic-02.png";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a101e",
        height: "90vh",
        fontFamily: "sans-serif",
        padding: "50px 0px",
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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <span style={{ color: "#fec544", fontSize: "32px", marginBottom: "40px" }}>ABOUT ME</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "100px" }}>
            <img src={profilePic} alt="My-Image" width="500px" />
          </div>
          <div style={{ marginLeft: "100px" }}>
            <span
              style={{ fontSize: "36px", color: "#fff", lineHeight: "43.2px" }}
            >
              Hi There! I'm Edward Devis
            </span>{" "}
            <br />
            <span
              style={{
                color: "#fec544",
                fontSize: "24px",
                lineHeight: "58.8px",
              }}
            >
              Visual Designer
            </span>{" "}
            <br />
            <span
              style={{ color: "#fff", fontSize: "16px", lineHeight: "25.6px" }}
            >
              I am a Visual Designer with a strong focus on digital branding.
              Visul <br /> design seeks to attract, inspire, create desires and
              otivate people to <br /> respond to messages, with a view to
              making a favorable impact.
            </span>
            <ul
              style={{
                listStyle: "none",
                color: "#fff",
                marginTop: "20px",
                lineHeight: "2.5",
              }}
            >
              <li>Birthday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : August 11, 2000</li>
              <li>
                Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +94 71
                4817470
              </li>
              <li>
                Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                dananjayahbi@gmail.com
              </li>
              <li>
                From&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                Colombo, Sri Lanka
              </li>
              <li>Language&nbsp;&nbsp; : English, Sinhala</li>
              <li>Freelance&nbsp;&nbsp; : Available</li>
            </ul>
            <button
              style={{
                width: "170px",
                height: "48px",
                fontSize: "16px",
                lineHeight: "24px",
                border: "none",
                color: "#070d1b",
                marginTop: "20px",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                backgroundColor: "#fec544",
                cursor: "pointer",
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
