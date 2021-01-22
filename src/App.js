import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/main.css";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const Navbar = lazy(() => import("./components/Navbar"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const OffertPage = lazy(() => import("./components/pages/OffertPage"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/kontakt" component={ContactPage} />
            <Route path="/o-nas" component={AboutPage} />
            <Route path="/oferta" component={OffertPage} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </BrowserRouter>
  );
}
