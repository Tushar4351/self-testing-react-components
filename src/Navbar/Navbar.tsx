import React from 'react';
import { NavbarConfig } from './navbarConfig';
import "./Navbar.css"


interface NavbarProps {
  config: NavbarConfig;
}

const Navbar: React.FC<NavbarProps> = ({ config }) => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">{config.logo}</div>
          <ul className="nav-links">
            {config.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          {config.rightContent} {/* Render the right-aligned content */}
        </div>
      </nav>
    );
  };
  

export default Navbar;

