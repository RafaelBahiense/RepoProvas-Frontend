import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";

import ResetCSS from "./styles/ResetCSS";
import Home from "./components/home/Home";
import Professors from "./components/professors/Professors";
import Professor from "./components/professors/Professor";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Saira Stencil One", "Raleway"],
      },
    });
  }, []);

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/professores" exact={true}>
            <Professors/>
          </Route>
          <Route path="/professor/:id" exact={true}>
            <Professor/>
          </Route>
          <Route path="/disciplinas" exact={true}>

          </Route>
          <Route path="/enviar-prova" exact={true}>

          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
