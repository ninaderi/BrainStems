import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PicLogin from "./picLogin";

class LogInComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityCode: "",
      displayActivityInput: true,
      displayLogIn: false,
      displayLogInDropdown: true
    };
  }

  async componentDidMount() {
    const data = await fetch("http://localhost:4000/studentList");
    const response = await data.json();
    this.setState({ students: response });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClick = async () => {
    const data = await fetch("http://localhost:4000/verifyCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        activityCode: this.state.activityCode
      })
    });
    const response = await data.json();
    console.log('response is ',response)
    response.data.status === 1
      ? this.setState({ displayActivityInput: false, displayLogIn: true, activityName: response.data.name })
      : console.log("wrong activity code");
    return response;
  };

  handleLogin = async arg => {
    const data = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: arg,
        wvUId: document.getElementById("studentId").value
      })
    });
    const response = await data.json();

    response.response === "Logged In"
      ? this.setRedirect()
      : this.setState({ displaySignInError: true });
    return response;
  };

  handleRegister = async arg => {
    const data = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: arg,
        activityCode: this.state.activityCode,
        fname: this.state.fname,
        lname: this.state.lname
      })
    });
    const response = await data.json();
    response.response === "user registered"
      ? this.setRedirect()
      : this.setState({ displaySignInError: true });
    return response;
  };

  toggleRegister = () => {
    this.setState({ displayLogInDropdown: !this.state.displayLogInDropdown });
  };

  setRedirect = () => {
    this.setState({ isLoggedIn: true });
    console.log("student logged in!");
  };

  logInRedirect = () => {
    if (this.state.isLoggedIn === true) {
      console.log("student already logged in");
      return <Redirect to="/activity" />;
    }
  };

  render() {
    if (!this.state.students) return null;  // won't this return null for entire component?
    const students = this.state.students.response.map((x, i) => {
      return <option key={i} value={x.wvUId}>{x.fname} {x.lname}</option>;
    });
    return (
      <div>
        {this.logInRedirect()}
        {this.state.displayActivityInput ? (
          <div>
            <h1>Enter your activity code:</h1>
            <br></br>
            <input
              type="text"
              id="activityCode"
              onChange={this.handleChange}
            ></input>
            <br />
            <button onClick={this.handleClick}>Submit</button>
          </div>
        ) : null}

        <div>
          {this.state.displayLogIn ? (
            <div>
              EXISTING STUDENTS IN ACTIVITY {this.state.activityName} ({this.state.activityCode}):
              {this.state.displayLogInDropdown ? (
                <div  className='dropdown'>
                  <select id="studentId">
                    {students}
                  </select>
                  <button onClick={this.toggleRegister}>Sign Up</button>
                </div>
              ) : (
                <div>
                  <button onClick={this.toggleRegister}>
                    Return to Sign In
                  </button>
                  <input
                    onChange={this.handleChange}
                    className="nameInput"
                    id="fname"
                    type="text"
                    placeholder="First Name"
                    value={this.state.fname}
                  ></input>
                  <input
                    onChange={this.handleChange}
                    className="nameInput"
                    id="lname"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lname}
                  ></input>
                  <br />
                </div>
              )}
              <PicLogin
                handleRegister={this.handleRegister}
                handleLogin={this.handleLogin}
                buttonView={this.state.displayLogInDropdown}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default LogInComp;
