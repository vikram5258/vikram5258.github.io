import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  DefaultRoute,
} from "react-router-dom";

// import './index.css';
import App from "./App";
import Demo from "./components/Demo";
import Resume from "./components/Resume";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <div className="navbar">
          {/* <HashRouter basename={"/portfolio"}> */}
          <Link to="/">Home</Link>

          <Link to="/demos">Demos</Link>

          <Link to="/resume">Resume</Link>
          {/* </HashRouter> */}
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/demos" exact component={Demo}>
          <DefaultRoute handler={App} />
        </Route>
        <Route path="/resume" exact component={Resume}>
          <DefaultRoute handler={App} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
