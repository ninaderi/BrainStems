import React, { Component } from "react"
import tennis from "../images/tennis.jpeg"
import golf from "../images/golf.jpg"
import volleyball from "../images/volleyball.jpg"
import soccer from "../images/soccer.jpg"
import hockey from "../images/hockey.jpg"
import bowling from "../images/bowling.jpg"
import football from "../images/football.jpeg"
import basketball from "../images/basketball.jpg"
import baseball from "../images/baseball.jpeg"
import "../styles/picLogin.css"

class PicLogin extends Component {
	constructor(props) {
		super(props) 
		this.inputPassword = ''

	}
	

	onClickPixels = (e) => {
		this.inputPassword += (e.target.name)
		document.getElementById(e.target.name).className += " clicked";
	}

	resetPad = () => {
		this.inputPassword = ""
		let list = ["soccer", "basketball", "volleyball", "baseball", "tennis", "football", "hockey", "bowling", "golf"]
		list.forEach(pixel => document.getElementById(pixel).className = "pixels")
	}


	
render () {
		return (
			<div className = "logInContainer">
			
				<div className = "picContainer">
					<img src = {soccer} alt = "soccer" onClick={this.onClickPixels} className = "pixels" name = "soccer" id = "soccer" />
					<img src = {basketball} alt = "basketball" onClick={this.onClickPixels} className = "pixels" name = "basketball" id = "basketball"/>
					<img src = {volleyball} alt = "volleyball" onClick={this.onClickPixels} className = "pixels" name = "volleyball" id = "volleyball"/>
					<img src = {baseball} alt = "baseball" onClick = {this.onClickPixels} className = "pixels" name = "baseball" id = "baseball"/>
					<img src = {tennis} alt = "tennis" onClick = {this.onClickPixels} className = "pixels" name = "tennis" id = "tennis"/>
					<img src = {football} alt = "football" onClick = {this.onClickPixels} className = "pixels" name = "football" id = "football"/>
					<img src = {hockey} alt = "hockey" onClick = {this.onClickPixels} className = "pixels" name = "hockey" id = "hockey"/>
					<img src = {bowling} alt = "bowling" onClick = {this.onClickPixels} className = "pixels" name = "bowling" id = "bowling"/>
					<img src = {golf} alt = "golf" onClick = {this.onClickPixels} className = "pixels" name = "golf" id = "golf"/>
				</div>
				{this.props.buttonView
					? <button onClick={() => this.props.handleLogin(this.inputPassword)} className = "btn btn-md btn-accent"> Log In </button>
					: <button onClick={() => this.props.handleRegister(this.inputPassword)} className = "btn btn-md btn-default"> Register </button>
				}
				<button onClick={this.resetPad} className = "btn btn-md btn-accent-outline"> Reset </button>
			</div>
			)
		}
}
export default PicLogin
