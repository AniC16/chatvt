import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
          backgroundColor: "#420C09", // Mahogany background
          color: "white", // White text
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          
          <span>
            <Link
              style={{ color: "white", marginLeft: 5 }}
              className="nav-link"
              to={"https://www.vt.edu/"}
            >
              Go Hokies
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
