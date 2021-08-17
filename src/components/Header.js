import React, { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
// import Time from "./Time";
import "./Header.css";

function Header() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="header-list">
      <ul className="list-wrapper">
        <li className="header-item">
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li className="header-item">
          <Link to="skills" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="header-item">
          <Link to="blog" spy={true} smooth={true}>
            Blog
          </Link>
        </li>
        <li className="header-item">{time}</li>
      </ul>
    </div>
  );
}

export default Header;
