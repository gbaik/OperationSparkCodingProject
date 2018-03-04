import React from "react";
import ReactDOM from "react-dom";

import Foo from "./components/Foo.js";

const App = () => (
  <div>
    <Foo />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
