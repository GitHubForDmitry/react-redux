import React from "react";
import ReactDOM from "react-dom";
import {connect, Provider} from "react-redux";
import {bindActionCreators, createStore} from "redux";
import App from "./components/App";
import {CHANGE_NAME, CHANGE_SECOND_NAME} from "./types/types";
import {reducer} from "./reducers/reducers";


const store = createStore(reducer);

const changeName = name => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}
const changeSurname = surname => {
    return {
        type: CHANGE_SECOND_NAME,
        payload: surname
    }
}



const mapStateToProps = state => {
    return {
        name: state.name,
        surname: state.surname
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeName: changeName,
        changeSurname: changeSurname
    }, dispatch);

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(App)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}><Wrapper /></Provider>,
  rootElement
);
