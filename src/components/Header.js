import React from "react";

function Header() {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
      }}
    >
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Service</li>
    </ul>
  );
}

export default Header;
