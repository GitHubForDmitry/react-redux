import React from "react";
import Registration from "./Registration";
import {
  changeName,
  changePassword,
  changeRepeatPassword
} from "../store/registration/action";
import { connect } from "react-redux";

function RegistrationContainer({
  name,
  changeName,
  password,
  changePassword,
  repeatPassword,
  changeRepeatPassword
}) {
  return (
    <Registration
      name={name}
      password={password}
      repeatPassword={repeatPassword}
      changeName={changeName}
      changePassword={changePassword}
      changeRepeatPassword={changeRepeatPassword}
    />
  );
}

const mapStateToProps = state => {
  return {
    name: state.registration.name,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword
  };
};
const mapDispatchToProps = {
  changeName,
  changePassword,
  changeRepeatPassword
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
