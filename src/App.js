import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Fragment } from "react";
import HomeTemplate from "./Templates/HomeTemplate";
import FilmDetailTemplate from "./Templates/FilmDetailTemplate";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel/Carousel";
import Films from "./Components/Films";
import Cinema from "./Components/Cinema";
import News from "./Components/News";
import MobileApp from "./Components/MobileApp";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          {/* <Header />
          <Carousel />
          <Films />
          <Cinema />
          <News />
          <MobileApp />
          <Footer /> */}
          <FilmDetailTemplate
            path="/film/maphim-tenphim"
            component={FilmDetailTemplate}
          ></FilmDetailTemplate>
          <HomeTemplate path="/" exact component={HomeTemplate}></HomeTemplate>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
