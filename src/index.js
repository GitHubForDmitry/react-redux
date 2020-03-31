import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider, connect } from "react-redux";
import { bindActionCreators, createStore } from "redux";
import { reducer } from "./reducers";
import { changeName, changeSurname } from "./actions";

const store = createStore(reducer);

const mapStateToProps = state => {
  return {
    name: state.name,
    secondName: state.secondName
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeName,
      changeSurname
    },
    dispatch
  );

const rootElement = document.getElementById("root");

const WrapperMainComponent = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <WrapperMainComponent />
  </Provider>,
  rootElement
);
