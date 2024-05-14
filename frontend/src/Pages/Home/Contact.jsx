import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: "#070d1b",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        padding: "50px 20px",
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
        <span
          style={{
            color: "#fec544",
            fontSize: "32px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          CONTACT
        </span>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Have a question or want to work together?
          </p>
          {/* icons and data */}
          <div style={{ display: "flex", marginTop: "50px" }}>
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div
              style={{
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <span style={{ marginBottom: "5px" }}>EMAIL</span>
              <span style={{ color: "#525764" }}>dananjayahbi@gmail.com</span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div
              style={{
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <span style={{ marginBottom: "5px" }}>Phone</span>
              <span style={{ color: "#525764" }}>+94 71 4817470</span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div
              style={{
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                justifyContent: "center",
              }}
            >
              <span style={{ marginBottom: "5px" }}>Address</span>
              <span style={{ color: "#525764" }}>Malabe, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
