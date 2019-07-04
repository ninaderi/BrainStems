import React, { Component } from "react"
import "./picLogin.css"

class PicLogin extends Component {
	constructor(props) {
		super(props) 
		this.state = {
		inputPassword: [],
		logIn: false 
		}

	}

	onChange = (e) => {
		// console.log("target", e.target.id);
		this.setState({ 
			[e.target.id]: e.target.value
		});
	}

	checkPassword = (arr1, arr2) => {
		for (let i=0; i<arr1.length; i++) {
			if (arr1[i] != arr2[i]){
				return false
			}
		}
		return true
	}

	handleSubmit = async (e) => {
		const data = await fetch('http://localhost:4000/logIn', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
           password: this.state.inputPassword,
           fname: this.state.fname,
           lname: this.state.lname,
         })
     })
     const response = await data.json();
     console.log(response)
     return response;
	}

	onClickPixels = (e, i) => {
		console.log(i)
		const pixelInput = this.state.inputPassword
		pixelInput.push(i)
		this.setState({
			inputPassword: pixelInput
		})
	}

render (props) {
	console.log(this.state)
		return (
			<div>
				<input onChange={this.onChange} id='fname' type='text' placeholder='Enter firstname here' value={this.state.fname}></input>
				<input onChange={this.onChange} id='lname' type='text' placeholder='Enter lastname here' value={this.state.lname}></input>
				<button onClick={this.handleSubmit} className = "btn"> Submit </button>
				<div className = "picContainer">
					<div onClick={(e) => this.onClickPixels(e,"1")} className = "pixels" name = "1"> 1 </div>
					<div onClick={(e) => this.onClickPixels(e,"2")} className = "pixels" name = "2"> 2 </div>
					<div onClick={(e) => this.onClickPixels(e,"3")} className = "pixels" name = "3"> 3 </div>
					<div onClick={(e) => this.onClickPixels(e,"4")} className = "pixels" name = "4"> 4 </div>
					<div onClick={(e) => this.onClickPixels(e,"5")} className = "pixels" name = "5"> 5 </div>
					<div onClick={(e) => this.onClickPixels(e,"6")} className = "pixels" name = "6"> 6 </div>
					<div onClick={(e) => this.onClickPixels(e,"7")} className = "pixels" name = "7"> 7 </div>
					<div onClick={(e) => this.onClickPixels(e,"8")} className = "pixels" name = "8"> 8 </div>
					<div onClick={(e) => this.onClickPixels(e,"9")} className = "pixels" name = "9"> 9 </div>
				</div>
			</div>
			)
		}
}
export default PicLogin