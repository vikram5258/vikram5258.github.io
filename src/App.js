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
          <div className="navbar">
            <Link to="/">Home</Link>

            <Link to="/demos">Demos</Link>

            <Link to="/resume">Users</Link>
          </div>
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
