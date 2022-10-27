import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { hydrate, render } from "react-dom";
import TagManager from "react-gtm-module";

const rootElement = document.getElementById("root");

const tagManagerArgs = {
  gtmId: "GTM-TKKMP2K",
};

TagManager.initialize(tagManagerArgs);

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
