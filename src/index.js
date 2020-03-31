import React from "react";
import ReactDOM from "react-dom";
import {bindActionCreators, createStore} from "redux";
import {reducer} from "./reducers";
import {Provider, connect} from "react-redux";
import App from "./components/App";
import {changeAge, changeName} from "./actions";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age
    }
}

const mapDispatchToProps = (dispatch) =>
        bindActionCreators({
            changeName,
            changeAge
        }, dispatch)

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
    <Provider store={store}><Wrapper /></Provider>,
  rootElement
);
