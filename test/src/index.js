import "@babel/polyfill";
import React from "react";
import { Provider, connect } from "react-redux";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import * as models from "./models";
import Bifrost from "../../index";

const store = init({
  models
});
const Count = props => (
  <div>
    The count is {props.count}
    <button onClick={props.increment}>increment</button>
    <button onClick={props.incrementAsync}>incrementAsync</button>
  </div>
);

const CountContainer = Bifrost(Count, connect);

ReactDOM.render(
  <Provider store={store}>
    <CountContainer />
  </Provider>,
  document.getElementById("app")
);
