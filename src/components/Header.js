import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <ul
      className="header-list"
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
      }}
    >
      <li>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </li>
      <li>
        <Link to="skills" spy={true} smooth={true}>
          Skills
        </Link>
      </li>
    </ul>
  );
}

export default Header;
