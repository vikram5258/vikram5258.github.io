import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
          {/* <HashRouter basename={"/portfolio"}> */}
          <Link to="/">Home</Link>

          <Link to="/demos">Demos</Link>

          <Link to="/resume">Resume</Link>
          {/* </HashRouter> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
