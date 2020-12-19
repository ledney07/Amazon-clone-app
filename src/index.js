import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialState, reducer } from "./Components/reducer";
import { StateProvider } from "./Components/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// initialState == is what the data looks in the beginning or overall
// reducer == is how we play with data
