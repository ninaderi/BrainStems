const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');



const express = require('express');
// const knex = require('knex');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlite"
  },
  useNullAsDefault: true
});
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
console.log("Why aren't you working?")

const users = [
{
	fname: "Seun",
	lname: "Mejule",
	password: ["1", "2" , "3"]
},
{
	fname: "Nilou",
	lname: "Naderi",
	password: ["5", "6" , "7"]
}, 
]

app.get('/', (req, res) => {
	console.log("Inside func")
	res.send( "Hello World!")
})

app.post('/logIn', (req, res) => {
	const {fname, lname, password} = req.body;
	console.log(password);
	if (this.state.fname != this.state.dbResponse.fname || this.state.lname != this.state.dbResponse.lname){
			console.log("first loop")
			this.setState({
				logIn: false,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "Invalid credentials"
		} else if(this.checkPassword(this.state.inputPassword, this.state.dbResponse.password) === false){
			console.log("2nd loop", this.state.inputPassword, this.state.dbResponse.password)
			this.setState({
				logIn: false,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "Invalid password"
		} else{
			console.log("3rd loop")
			this.setState({
				logIn: true,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "You are in!"
		}

	console.log("Connecting!", req.body)
	res.send({"reponse": "Hello World!"})

})

app.listen(4000);
 