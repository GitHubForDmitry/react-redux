import React from "react";
import ReactDOM from "react-dom";
import  App from "./component/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducers";

const initialState = {
    name: "",
    surname: ""
}


const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  rootElement
);
