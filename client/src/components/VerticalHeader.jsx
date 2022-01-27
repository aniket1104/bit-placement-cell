import React from "react";
import "../assets/css/VerticalHeader.css";

const VerticalHeader = () => {
  return (
    <div className="vertical-header position-fixed">
      <div
        className="vertical-header-wrapper position-relative start-0 translate-middle"
        style={{ top: "250px" }}
      >
        <h3>{document.title}</h3>
      </div>
    </div>
  );
};

export default VerticalHeader;