import React, { Fragment } from "react";
import { Route } from "react-router";
import FilmDetail from "../Components/FilmDetail/FilmDetail";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function FilmDetailTemplate(props) {
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header></Header>
              <h1 className="text-center">Film Detail</h1>
              <FilmDetail></FilmDetail>
              <Footer></Footer>
            </Fragment>
          );
        }}
      ></Route>
    </Fragment>
  );
}
