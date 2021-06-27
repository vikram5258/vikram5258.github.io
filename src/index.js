import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

// import './index.css';
import App from "./App";
import About from "./components/About";
import Demo from "./components/demos";
// import Resume from "./components/Resume";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      {/* <App /> */}
      {/* <Router> */}
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/demos" exact component={Demo}></Route>
        {/* <Route path="/resume" exact component={Resume}></Route> */}
        <Route path="/about" exact component={About}></Route>
      </Switch>
      {/* </Router> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
