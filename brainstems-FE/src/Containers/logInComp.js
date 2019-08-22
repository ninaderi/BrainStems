import React, { Component } from "react"
import logInComp from "../Containers/logInComp"
import PicLogin from "./picLogin";


class LogInComp extends Component {
	constructor(props) {
		super(props) 
		this.state = {
            activityCode: '',
            displayActivityInput: true,
            displayLogIn: false
		
		}

	}

    handleChange = (event) => {
        this.setState({activityCode: event.target.value});
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
     console.log(response.data.status)

     response.data.status === 1
     ? this.setState({displayActivityInput: false, displayLogIn: true })
     : console.log("wrong activity code")
     return response;
    }



	
render () {
	console.log(this.state)
		return (
            <div>
			{this.state.displayActivityInput
               ? <div>
            <input type = "text" value ={this.state.activityCode} onChange={this.handleChange}></input>
            <button onClick = {this.handleClick}>Submit</button>
			Is thais not why you aere here
			</div>
            : null}
           { this.state.displayLogIn ? <PicLogin /> : null}
            </div>

			)
		}
}
export default LogInComp
