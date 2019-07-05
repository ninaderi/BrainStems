const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');
var cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.sqlite"
  },
  useNullAsDefault: true
});




// *****************************THE TABLES IN KNEX IS INSTANTIATED BELOW FEEL FREE TO EDIT AND ADD NEW TABLES**************************

knex.schema.createTable('student', (table) => {
	table.increments('id');
	table.string('fname');
	table.string('lname');
	table.string('title');
	table.timestamps();
  }).then(function () {
	console.log('Movies Table is Created!')
	.catch(err => console.log(err));
  });


  //****************************** SAMPLE INSERT STRING******************************************8
//   knex('movies').insert({title: 'Slaughterhouse Fiveness'}).then(data => console.log(data))

//   knex.select().table('movies')
//   .then(data => console.log(data))



app.get('/', (req, res) => {
	res.send( "Hello World!")
})

app.post('/logIn', (req, res) => {
	const {fname, lname, password} = req.body;
	// if (this.state.fname != this.state.dbResponse.fname || this.state.lname != this.state.dbResponse.lname){
	// 		console.log("first loop")
	// 		this.setState({
	// 			logIn: false,
	// 			inputPassword: [],
	// 			fname: "",
	// 			lname: "",
	// 		})
	// 		return "Invalid credentials"
	// 	} else if(this.checkPassword(this.state.inputPassword, this.state.dbResponse.password) === false){
	// 		console.log("2nd loop", this.state.inputPassword, this.state.dbResponse.password)
	// 		this.setState({
	// 			logIn: false,
	// 			inputPassword: [],
	// 			fname: "",
	// 			lname: "",
	// 		})
	// 		return "Invalid password"
	// 	} else{
	// 		console.log("3rd loop")
	// 		this.setState({
	// 			logIn: true,
	// 			inputPassword: [],
	// 			fname: "",
	// 			lname: "",
	// 		})
	// 		return "You are in!"
	// 	}

	console.log("Connecting!", req.body)
	res.send({"reponse": "Hello World!"})

})

app.listen(4000);
 