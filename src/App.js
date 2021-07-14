import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Lucky from "./views/Lucky";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Link className="navLinks" to="/">Home</Link>
          <Link className="navLinks" to="/lucky">Find my dog</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/breed/:name">
            <Detail />
          </Route>
          <Route path="/lucky">
            <Lucky />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
