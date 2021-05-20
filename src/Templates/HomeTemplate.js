import React, { Fragment } from "react";
//import fragment vào để không còn phải dùng thẻ div để có thể bao bọc một component nữa
import { Route } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cinema from "../Components/Cinema/Cinema";
import Films from "../Components/Films/Films";
import News from "../Components/News/News";
import MobileApp from "../Components/MobileApp/MobileApp";
import Carousel from "../Components/Carousel/Carousel";

export default function HomeTemplate(props) {
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header></Header>
              <Carousel></Carousel>
              <Films></Films>
              <Cinema></Cinema>
              <News></News>
              <MobileApp></MobileApp>
              <Footer></Footer>
            </Fragment>
          );
        }}
      ></Route>
    </Fragment>
  );
}
