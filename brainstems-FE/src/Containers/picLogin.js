import React, { Component } from "react"
import winter from "../images/winter.jpg"
import worms from "../images/worms.jpg"
import volleyball from "../images/volleyball.jpg"
import soccer from "../images/soccer.jpg"
import gummies from "../images/gummies.jpg"
import chocolate from "../images/chocolate.jpg"
import forest from "../images/forest.jpg"
import desert from "../images/desert.jpg"
import basketball from "../images/basketball.jpg"
import "../styles/picLogin.css"

class PicLogin extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			inputPassword: "",
			logIn: false,
			buttonView: 'login' 
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
			if (arr1[i] !== arr2[i]){
				return false
			}
		}
		return true
	}

	handleLogin = async (e) => {
		const data = await fetch('http://localhost:4000/login', {
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

	handleRegister = async (e) => {
		const data = await fetch('http://localhost:4000/register', {
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

	onClickPixels = (e) => {
		console.log(e.target.name)
		let pixelInput = this.state.inputPassword
		pixelInput += (e.target.name)
		document.getElementById(e.target.name).className += " clicked";
		console.log("classname is ",document.getElementById(e.target.name).className )
		this.setState({
			inputPassword: pixelInput
		})
	}

	resetPad = () => {
		let list = ["soccer", "basketball", "volleyball", "desert", "winter", "forest", "gummies", "chocolate", "worms"]
		this.setState({inputPassword: "",
						fname: '',
						lname: ''
					})
		list.forEach(pixel => document.getElementById(pixel).className = "pixels")
	}

	switchForm = (e) => {
		this.setState({buttonView: e.target.name})
	}
	
render (props) {
	console.log(this.state)
		return (
			<div>
				<input onChange={this.onChange} className="nameInput" id='fname' type='text' placeholder='First Name' value={this.state.fname}></input>
				<input onChange={this.onChange} className="nameInput" id='lname' type='text' placeholder='Last Name' value={this.state.lname}></input>
				<br />
				<div className = "picContainer">
					<img src = {soccer} alt = "soccer" onClick={this.onClickPixels} className = "pixels" name = "soccer" id = "soccer" />
					<img src = {basketball} alt = "basketball" onClick={this.onClickPixels} className = "pixels" name = "basketball" id = "basketball"/>
					<img src = {volleyball} alt = "volleyball"onClick={this.onClickPixels} className = "pixels" name = "volleyball" id = "volleyball"/>
					<img src = {desert} alt = "desert" onClick = {this.onClickPixels} className = "pixels" name = "desert" id = "desert"/>
					<img src = {winter} alt = "winter" onClick = {this.onClickPixels} className = "pixels" name = "winter" id = "winter"/>
					<img src = {forest} alt = "forest" onClick = {this.onClickPixels} className = "pixels" name = "forest" id = "forest"/>
					<img src = {gummies} alt = "gummies" onClick = {this.onClickPixels} className = "pixels" name = "gummies" id = "gummies"/>
					<img src = {chocolate} alt = "chocolate" onClick = {this.onClickPixels} className = "pixels" name = "chocolate" id = "chocolate"/>
					<img src = {worms} alt = "worms" onClick = {this.onClickPixels} className = "pixels" name = "worms" id = "worms"/>
				</div>
				{this.state.buttonView === 'login'
					? <button onClick={this.handleLogin} className = "btn btn-md btn-accent"> Log In </button>
					: <button onClick={this.handleRegister} className = "btn btn-md btn-default"> Register </button>
				}
				<button onClick={this.resetPad} className = "btn btn-md btn-accent-outline"> Reset </button>
			</div>
			)
		}
}
export default PicLogin
