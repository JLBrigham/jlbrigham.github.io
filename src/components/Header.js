import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <ul
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
      <li>Contact</li>
      <li>Service</li>
    </ul>
  );
}

export default Header;
