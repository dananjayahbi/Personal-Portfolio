import React from "react";
import { Result } from "antd";

const LowWidth = () => {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Result
        status="403"
        title="Oops! Access Denied"
        subTitle={
          <>
            Sorry, please use a device with a higher width. (More than 1300px) to view this website.
          </>
        }
      />
    </div>
  );
};

export default LowWidth;
