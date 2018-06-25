import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  _drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  _backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this._backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Toolbar drawerClickHandler={this._drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main>
          <p className="main-paragraph">This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
