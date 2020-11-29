import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";

import "./styles/main.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/kontakt" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
