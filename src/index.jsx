import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"

import reducer from "./store/reducers"
import middleware from "./store/middleware";

import App from "./App.jsx";

const store = createStore(reducer, middleware);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));
