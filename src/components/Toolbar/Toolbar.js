import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div />
        <div className="toolbar-logo">
          <a href="/">
            <p>The Logo!</p>
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
