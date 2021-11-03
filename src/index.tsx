import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import Header from './components/blocks/Header/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/detail'>
            <div>
              <p>Here will be the film detail</p>
            </div>
          </Route>
          <Route path='/'>
            <div>
              <h3>Hello There! What is your name today?</h3>
              <input></input>
              <button onClick={() => alert("Hello")}>Say Hello</button>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
