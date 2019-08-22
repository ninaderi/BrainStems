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
		this.inputPassword = ''

	}
	

	onClickPixels = (e) => {
		console.log(e.target.name)
		this.inputPassword += (e.target.name)
		document.getElementById(e.target.name).className += " clicked";
	}

	resetPad = () => {
		this.inputPassword = ""
		let list = ["soccer", "basketball", "volleyball", "desert", "winter", "forest", "gummies", "chocolate", "worms"]
		list.forEach(pixel => document.getElementById(pixel).className = "pixels")
	}


	
render () {
	console.log(this.state)
		return (
			<div>
			
				<div className = "picContainer">
					<img src = {soccer} alt = "soccer" onClick={this.onClickPixels} className = "pixels" name = "soccer" id = "soccer" />
					<img src = {basketball} alt = "basketball" onClick={this.onClickPixels} className = "pixels" name = "basketball" id = "basketball"/>
					<img src = {volleyball} alt = "volleyball" onClick={this.onClickPixels} className = "pixels" name = "volleyball" id = "volleyball"/>
					<img src = {desert} alt = "desert" onClick = {this.onClickPixels} className = "pixels" name = "desert" id = "desert"/>
					<img src = {winter} alt = "winter" onClick = {this.onClickPixels} className = "pixels" name = "winter" id = "winter"/>
					<img src = {forest} alt = "forest" onClick = {this.onClickPixels} className = "pixels" name = "forest" id = "forest"/>
					<img src = {gummies} alt = "gummies" onClick = {this.onClickPixels} className = "pixels" name = "gummies" id = "gummies"/>
					<img src = {chocolate} alt = "chocolate" onClick = {this.onClickPixels} className = "pixels" name = "chocolate" id = "chocolate"/>
					<img src = {worms} alt = "worms" onClick = {this.onClickPixels} className = "pixels" name = "worms" id = "worms"/>
				</div>
				{this.props.buttonView === 'login'
					? <button onClick={() => this.props.handleLogin(this.inputPassword)} className = "btn btn-md btn-accent"> Log In </button>
					: <button onClick={() => this.props.handleRegister(this.inputPassword)} className = "btn btn-md btn-default"> Register </button>
				}
				<button onClick={this.resetPad} className = "btn btn-md btn-accent-outline"> Reset </button>
			</div>
			)
		}
}
export default PicLogin
