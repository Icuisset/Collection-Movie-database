import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import Header from './components/blocks/Header/Header';
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from "./components/blocks/Footer/Footer";
import MovieCardDetail from "./components/elements/MovieCardDetail/MovieCardDetail";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flex-wrapper">
        <Header />
        <Switch>
          <Route path='/detail/:id' children={<MovieCardDetail/>}/>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
