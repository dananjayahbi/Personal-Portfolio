import React from "react";
import HeaderComponent from "../../Partials/Header";
import HeroBackground from "../../Images/HeroBackground.jpg";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <HeaderComponent />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-115px",
          fontFamily: "sans-serif",
          padding: "0 20px", // Added padding for responsiveness
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            maxWidth: "650px", // Set maximum width for better responsiveness
          }}
        >
          <span style={{ color: "#fff", fontSize: "clamp(30px, 8vw, 60px)" }}>
            Hi, I'm <span style={{ color: "#fec544" }}>Isuru Dananjaya</span>
          </span>{" "}
          <br />
          <span
            style={{
              fontSize: "clamp(14px, 4vw, 18px)",
              color: "#6c757d",
              lineHeight: "1.5",
            }}
          >
            I am a full-stack web designer and developer with a passion for creating beautiful and functional user experiences.
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {/* Icon Button facebook */}
            <div
              style={{
                border: "3px solid #35383b",
                borderRadius: "50%",
                width: "clamp(40px, 8vw, 50px)",
                height: "clamp(40px, 8vw, 50px)",
                display: "flex",
                margin: "0 10px",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#6c757d";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#35383b";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="clamp(20px, 4vw, 24px)"
                height="clamp(20px, 4vw, 24px)"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c757d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            {/* Icon Button Linkedin */}
            <div
              style={{
                border: "3px solid #35383b",
                borderRadius: "50%",
                width: "clamp(40px, 8vw, 50px)",
                height: "clamp(40px, 8vw, 50px)",
                display: "flex",
                margin: "0 10px",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#6c757d";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#35383b";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="clamp(20px, 4vw, 24px)"
                height="clamp(20px, 4vw, 24px)"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c757d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            {/* Icon Button GitHub */}
            <div
              style={{
                border: "3px solid #35383b",
                borderRadius: "50%",
                width: "clamp(40px, 8vw, 50px)",
                height: "clamp(40px, 8vw, 50px)",
                display: "flex",
                margin: "0 10px",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#6c757d";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#35383b";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="clamp(20px, 4vw, 24px)"
                height="clamp(20px, 4vw, 24px)"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c757d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
