import React, { Component } from "react"
import logInComp from "../Containers/logInComp"
import PicLogin from "./picLogin";


class LogInComp extends Component {
	constructor(props) {
		super(props) 
		this.state = {
            activityCode: '',
            displayActivityInput: true,
            displayLogIn: false,
            displayLogInDropdown: true,
		}

	}

    handleChange = (e) => {
        this.setState({
			[e.target.id]: e.target.value
		});
      }

    handleClick = async () => {
        const data = await fetch('http://localhost:4000/verifyCode', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
           activityCode: this.state.activityCode,
         })
     })
     const response = await data.json();  


     response.data.status === 1
     ? this.setState({displayActivityInput: false, displayLogIn: true })
     : console.log("wrong activity code")
     return response;
    }

    handleLogin = async (arg) => {
		const data = await fetch('http://localhost:4000/login', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
           password: arg,
           fname: this.state.fname,
           lname: this.state.lname,
         })
     })
     const response = await data.json();
     console.log(response)
     return response;
	}

	handleRegister = async (arg) => {
        console.log(arg)
        console.log(this.state)
		const data = await fetch('http://localhost:4000/register', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
           password: arg,
           fname: this.state.fname,
           lname: this.state.lname,
         })
     })
     const response = await data.json();
     console.log(response)
     return response;
	}

	toggleRegister = () => {
        this.setState({displayLogInDropdown: !this.state.displayLogInDropdown})
    }

render () {
console.log(this.state, "where is this guy")
		return (
            <div>
			{this.state.displayActivityInput
               ? <div>
            Enter your activity code:
            <br></br>
            <input type = "text" id ="activityCode" onChange={this.handleChange}></input>
            <button onClick = {this.handleClick}>Submit</button>
			
			</div>
            : null}
            
            <div>
            
                {this.state.displayLogIn ? (
           <div>
               
             EXISTING STUDENTS IN THIS ACTIVITY:
                { 
                    this.state.displayLogInDropdown ? 
                    (<div>
                    <select>
                        <option value="student 1">student 1</option>
                        <option value="student 2">student 2</option>
                        <option value="student 3">student 3</option>
                        <option value="student 4">student 4</option>
                    </select>
                    <button onClick={this.toggleRegister}>Sign Up</button>
                    </div>
                    )
                    : (<div>
                        <button onClick={this.toggleRegister}>Return to Sign In</button>
                        <input onChange={this.handleChange} className="nameInput" id='fname' type='text' placeholder='First Name' value={this.state.fname}></input>
                        <input onChange={this.handleChange} className="nameInput" id='lname' type='text' placeholder='Last Name' value={this.state.lname}></input>
                        <br />
                        
                    </div>
                    )
                }

             <PicLogin
               handleRegister={this.handleRegister}
               handleLogin={this.handleLogin}
             />
           </div>
         ) : null}
           
           </div>
            </div>

			)
		}
}
export default LogInComp
