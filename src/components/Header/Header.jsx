import React from "react";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <span className="header-logo">LOGO</span>
      <div className="header-links">
        <span className="header-link_item">My Projects</span>
        <span className="header-link_item">My Supervisor</span>
      </div>
    </div>
  );
};

export default Header;
