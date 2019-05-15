import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";

ReactDOM.render(<Client />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
