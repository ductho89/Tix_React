import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Fragment } from "react";
import HomeTemplate from "./Templates/HomeTemplate";
import FilmDetail from "./Components/FilmDetail/FilmDetail";
import Home from "./Components/Home/Home";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate path="/home" exact component={Home}></HomeTemplate>
          <HomeTemplate
            path="/detail/:id"
            component={FilmDetail}
          ></HomeTemplate>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
