import React from "react";
import axios from "axios";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.formData);
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/signup", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  showLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h1>Create Account</h1>
        <form className="form-group col-sm-6 mt-5" onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={this.handleChange}
          />

          <div className="user-form__buttons">
            <button type="submit" className="btn btn-primary btn-lg mt-3">
              Sign up
            </button>
            {/* <button
              type="button"
              className="btn btn-primary btn-lg mt-3"
              onClick={this.showLogin}
            >
              Log in
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
