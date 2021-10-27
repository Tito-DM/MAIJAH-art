import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-Name">
        <h1>MAIJAH</h1>
        <sub>art</sub>
      </div>

      <div className="nav-list">
        <ul>
          <li
            style={{
              color: "gold",
            }}
          >
            Home
          </li>
          <li>Collection</li>
          <li>Gallery</li>
          <li>NTFs</li>
          <li>Projects</li>
          <li>Support</li>
        </ul>
        <div style={{ width: "10px", height: "100vh" }}>
          <div
            style={{ background: "#8e24aa ", width: "10px", height: "40%" }}
          ></div>
          <div
            style={{ background: "#43a047", width: "10px", height: "40%" }}
          ></div>
          <div
            style={{ background: "#1e88e5", width: "10px", height: "40%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
