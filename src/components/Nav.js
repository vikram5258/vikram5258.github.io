import React from "react";
import { Link } from "react-router-dom";
import FormDialog from "./FormDialog";
function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
          {/* <HashRouter basename={"/portfolio"}> */}
          <Link to="/">Home</Link>

          <Link to="/demos">Demos</Link>
          <FormDialog />
          {/* <Link to="/resume">Resume</Link> */}
          <Link to="/about">About</Link>

          {/* </HashRouter> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
