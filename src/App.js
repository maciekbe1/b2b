import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import "./styles/main.css";

export default function App() {
	return (
		<BrowserRouter>
			<Navbar transparent />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/kontakt" component={Contact} />
			</Switch>
		</BrowserRouter>
	);
}
