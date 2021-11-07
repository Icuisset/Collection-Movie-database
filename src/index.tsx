import ReactDOM from "react-dom";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import Header from './components/blocks/Header/Header';
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from "./components/blocks/Footer/Footer";
import MovieCardDetail from "./components/elements/MovieCardDetail/MovieCardDetail";

Sentry.init({
  dsn: "https://7cf81b7f3cbb4618bc70e4de208a530a@o1062319.ingest.sentry.io/6052736",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.5,
});

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

export default Sentry.withProfiler(App);
