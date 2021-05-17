// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from "./components/Demo";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World !!</h1>
      </div>
    </Router>
  );
}

export default App;
