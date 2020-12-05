import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import Navbar from "./components/Navbar";

import "./styles/main.css";

import AboutPage from "./components/pages/AboutPage";
import OffertPage from "./components/pages/OffertPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/kontakt" component={ContactPage} />
          <Route path="/o-nas" component={AboutPage} />
          <Route path="/oferta" component={OffertPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
