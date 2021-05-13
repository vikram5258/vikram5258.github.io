// import logo from './logo.svg';
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Demo from "./components/Demo";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="navbar">
            <HashRouter>
              <Link to="/">Home</Link>

              <Link to="/demos">Demos</Link>

              <Link to="/resume">Resume</Link>
            </HashRouter>
          </div>
        </nav>
        <h1>Hello World !!</h1>
        <Switch>
          <Route path="/demos" exact component={Demo} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
