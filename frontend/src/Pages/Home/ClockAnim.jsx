import React from "react";
import Clock from "./assets/Clock.html";

const ClockAnim = () => {
  return (
    <div style={{ marginBottom: "-10px" }}>
      <iframe
        src={Clock}
        style={{ width: "100%", height: "500px", border: "none" }}
      />
      <div style={{ backgroundColor: "#413638", marginTop: "-50px" }}>
        <p
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            color: "#fff",
            fontFamily: "sans-serif",
            fontSize: "12px",
          }}
        >
          Press the power button to turn on the clock. <br />
          Reference :{" "}
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://codepen.io/RAFA3L/pen/PoVYoPN#"
          >
            "https://codepen.io/RAFA3L/pen/PoVYoPN#"
          </a>
        </p>
      </div>
    </div>
  );
};

export default ClockAnim;
