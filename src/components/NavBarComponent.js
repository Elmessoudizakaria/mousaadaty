/*
 * File Created: Tuesday, 3rd August 2021 9:28:09 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 3rd August 2021 9:28:09 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';

export const NavBarComponent = () => {
  return (
    <div className="navBar">
      <div className="navBar-logo">
        <label style={{ display: 'block' }}>mousaadaty</label>
      </div>
      <div className="navBar-buttons-container">
        <button className="navBar-button">sign up</button>
        <button className="navBar-button">sign in</button>
      </div>
    </div>
  );
};
