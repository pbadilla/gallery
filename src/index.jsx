import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import store from "./redux/store";

import { Home } from "./containers/home";
import Image from "./containers/image";

import "./index.scss";

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/photo/:id" component={Image} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
