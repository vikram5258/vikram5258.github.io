import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './index.css';
import App from "./App";
import Demo from "./components/Demo";
import Resume from "./components/Resume";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter> */}
    {/* <App /> */}
    <Router>
      <Switch>
        <Route path="/gh-pages-url/" exact component={App}></Route>
        <Route path="/gh-pages-url/demos" exact component={Demo}></Route>
        <Route path="/gh-pages-url/resume" exact component={Resume}></Route>
      </Switch>
    </Router>
    {/* </HashRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
