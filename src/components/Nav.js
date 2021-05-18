import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
          {/* <HashRouter basename={"/portfolio"}> */}
          <Link to="/gh-pages-url/">Home</Link>

          <Link to="/gh-pages-url/demos">Demos</Link>

          <Link to="/gh-pages-url/resume">Resume</Link>
          {/* </HashRouter> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
