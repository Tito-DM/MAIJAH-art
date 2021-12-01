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
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="logo-Name">
          <h1 className="logo-title">MAIJAH</h1>
          <sub className="logo-title-sub">art</sub>
        </div>

        <div className="nav-list">
          <ul>
            <li>
              <Link  className ="linkstyle"  to="/">Home</Link>
            </li>
            <li>Collection</li>
            <li>
              <Link  className ="linkstyle" to="/gallery">Gallery</Link>
            </li>
            <li>NTFs</li>
            <li>Projects</li>
            <li>
              <AiFillInfoCircle className="nav-list-icon" />
              Support
            </li>
          </ul>
        </div>
        <div className="footer">
        <BsInstagram size="30" className="footer-logo" />
        <BsFacebook size="30" className="footer-logo" />
        <AiFillTwitterCircle size="30" />
      </div>
      </div>
  
    </Fragment>
  );
};

export default NavBar;
