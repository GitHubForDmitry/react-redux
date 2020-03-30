import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import { createStore, bindActionCreators } from "redux";

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const initialState = {
  name: "Bob",
  secondName: "Vilkovich"
};

const actionChangeName = name => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: name
  };
};
const actionChangeSecondName = secondName => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: secondName
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ACTION_CHANGE_FIRST_NAME: {
          return {
              ...state,
              name: action.payload
          }
      }
      case ACTION_CHANGE_SECOND_NAME: {
          return {
              ...state,
              secondName: action.payload
          }
      }
  }
  return state;
};

const store = createStore(reducer);

const App = ({ name, secondName, changeFirstName, changeLastName }) => {
    console.log(name);
    console.log(secondName);

  return (
    <form>
      <div className="form-group">
        <input
          value={name}
          style={{ width: 200 }}
          className="form-control"
          type="text"
          placeholder="First name"
          onChange={event => {
              (changeFirstName(event.target.value))
          }}
        />
        <input
          value={secondName}
          style={{ width: 200 }}
          className="form-control"
          type="text"
          placeholder="second name"
          onChange={event => {
              (changeLastName(event.target.value))
          }}
        />
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    secondName: state.secondName
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changeFirstName: actionChangeName,
            changeLastName: actionChangeSecondName
        },
        dispatch
    );
const WrappedMainComponent = connect(mapStateToProps, mapDispatchToProps)(App);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  rootElement
);
