import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuContainer from "./MenuContainer";

import { whyDidYouUpdate } from "why-did-you-update";

whyDidYouUpdate(React);

ReactDOM.render(
  <MenuContainer/>,
  document.getElementById("container")
);
