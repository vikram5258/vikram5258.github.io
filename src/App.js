// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from "./components/Demo";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demos">Demos</Link>
            </li>
            <li>
              <Link to="/resume">Users</Link>
            </li>
          </ul>
        </nav>
        <h1>Hello World !!</h1>
        <Switch>
          <Route path="/demos" component={Demo} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
