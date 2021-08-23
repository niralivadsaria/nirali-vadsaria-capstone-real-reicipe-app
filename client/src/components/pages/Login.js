import React from "react";
import axios from "axios";
import "./login.scss";

class Login extends React.Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/login", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch((error) => alert(error));
  };

  showSignUp = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <div className="form-group col-sm-6 mt-5">
          <form onSubmit={this.handleSubmit}>
            <label className="">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
            <div className="mb-3"></div>
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <div className="user-form__buttons">
              <button type="submit" className="btn btn-primary btn-lg mt-3">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
