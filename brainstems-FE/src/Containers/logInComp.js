import React, { Component } from "react"
import logInComp from "../Containers/logInComp"
import PicLogin from "./picLogin";


class LogInComp extends Component {
	constructor(props) {
		super(props) 
		this.state = {
            activityCode: '',
            activeRoster: '',
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
    //////////  request activity code and receive activity object if code exists in roster table ////////
    handleCodeSubmitClick = async () => {
        const data = await fetch('http://localhost:4000/verifyCode', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            activityCode: this.state.activityCode
            })
        })
        const response = await data.json();  
        // const roster = await rosterList.json();

        console.log("verify code response is ", response);

        try {   ///////// check if activity status is active , i.e. status === 1 ///////
            if (response.data.status === 1) {
                this.setState({displayActivityInput: false, displayLogIn: true})
                
            } else {
                console.log("wrong activity code")
            }
                // return response;
        }  
        catch(err) {
            console.log("code does not exist");
        }
    }
     

    handleLogin = async (arg) => {
		const data = await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            // activityCode: this.state.activityCode,
            password: arg,
            studentfname: this.state.studentfname,
            studentlname: this.state.studentlname,
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
           activityCode: this.state.activityCode,
           studentfname: this.state.studentfname,
           studentlname: this.state.studentlname,
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
// console.log("active roster is ", this.state.activeRoster)
		return (
            <div>
			{this.state.displayActivityInput
               ? <div>
            Enter your activity code:
            <br></br>
            <input type = "text" id ="activityCode" onChange={this.handleChange}></input>
            <button onClick = {this.handleCodeSubmitClick}>Submit</button>
			
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
                        <input onChange={this.handleChange} className="nameInput" id='studentfname' type='text' placeholder='First Name' value={this.state.studentfname}></input>
                        <input onChange={this.handleChange} className="nameInput" id='studentlname' type='text' placeholder='Last Name' value={this.state.studentlname}></input>
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
