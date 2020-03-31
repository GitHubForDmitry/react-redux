import React from 'react';
import { createStore} from "redux";
import rootReducer from './store/reducers'
import {Provider} from "react-redux";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";
const store = createStore(rootReducer);


function App(props) {
    return (
        <Provider store={store}>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login for Form 1</h3>
                        <AuthContainer/>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <h3>Login for Form 2</h3>
                        <RegistrationContainer/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;