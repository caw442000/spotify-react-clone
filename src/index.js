import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./reducer/StateProvider";
import reducer, { initialState } from "./reducer/reducer";
import { SoundLayer } from "./reducer/SoundLayer";
import soundReducer, { soundInitialState } from "./reducer/soundReducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
