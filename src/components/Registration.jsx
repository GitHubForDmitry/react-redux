import React from "react";

function Registration({
  name,
  changeName,
  password,
  changePassword,
  repeatPassword,
  changeRepeatPassword
})
{
    return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Your Email *"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Your Password *"
          value={password}
          onChange={e => changePassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Repeat Your Password *"
          value={repeatPassword}
          onChange={e => changeRepeatPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" className="btnSubmit" value="Login" />
      </div>
      <div className="form-group">
        <a href="#" className="ForgetPwd" value="Login">
          Forget Password?
        </a>
      </div>
    </form>
  );
}

export default Registration;
