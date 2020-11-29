import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";

import "./styles/main.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kontakt" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
