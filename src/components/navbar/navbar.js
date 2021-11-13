import React, { Fragment } from "react";
import "./navbar.css";
import {
  AiOutlineHome,
  AiFillInfoCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdOutlineCollections } from "react-icons/md";
import {
  BsCollection,
  BsInstagram,
  BsFacebook,
  BsFillFileSpreadsheetFill,
} from "react-icons/bs";
import { GiPaintBrush } from "react-icons/gi";

const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="logo-Name">
          <h1 className="logo-title">MAIJAH</h1>
          <sub>art</sub>
        </div>

        <div className="nav-list">
          <ul>
            <li
              style={{
                color: "gold",
              }}
            >
              <AiOutlineHome className="nav-list-icon" /> Home
            </li>
            <li>
              <BsCollection className="nav-list-icon" />
              Collection
            </li>
            <li>
              <MdOutlineCollections className="nav-list-icon" />
              Gallery
            </li>
            <li>
              <BsFillFileSpreadsheetFill  className="nav-list-icon" />
              NTFs
            </li>
            <li>
              <GiPaintBrush className="nav-list-icon" />
              Projects
            </li>
            <li>
              <AiFillInfoCircle className="nav-list-icon" />
              Support
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <BsInstagram size="30" className="footer-logo" />
        <BsFacebook size="30" className="footer-logo" />
        <AiFillTwitterCircle size="30" />
      </div>
    </Fragment>
  );
};

export default NavBar;
