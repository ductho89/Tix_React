import React, { Fragment } from "react";
//import fragment vào để không còn phải dùng thẻ div để có thể bao bọc một component nữa
import { Route } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
              <props.component {...propsRoute}></props.component>
              {/* Phải tiềm hiểu lại về cái props.component này */}
              <Footer></Footer>
            </Fragment>
          );
        }}
      ></Route>
    </Fragment>
  );
}
