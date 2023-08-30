import React from 'react';

export interface NavLink {
    text: string;
    url: string;
  }
  
  export interface NavbarConfig {
    logo: string;
    links: NavLink[];
    rightContent: React.ReactNode; 
  }
  
  export const navbarConfig: NavbarConfig = {
    logo: 'Logo',
    links: [
      { text: 'Home', url: '#' },
      { text: 'About', url: '#' },
      { text: 'Contact', url: '#' },
    ],
    rightContent: (
      <>
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </>
    ),
  };