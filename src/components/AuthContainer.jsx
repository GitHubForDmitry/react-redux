import React from 'react';
import Auth from "./Auth";
import {changeName, changePassword} from "../store/auth/action";
import { connect } from 'react-redux';

function AuthContainer({name, password, changeName, changePassword}) {
    return (
        <div>
            <Auth changeName={changeName} changePassword={changePassword} name={name} password={password}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        password: state.auth.password
    }
};

const mapDispatchToProps = {
    changeName,
    changePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);