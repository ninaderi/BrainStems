// **************************THE SERVER IS BUILT ON knex.JS, THE DB FOR DEVELOPMENT IN SQLITE3 *****************************************************
// ************************** DOCUMENTATION CAN BE FOUND AT knexjs.org******************************************************************************


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




// *****************************THE TABLES IN KNEX ARE INSTANTIATED BELOW FEEL FREE TO EDIT AND ADD NEW TABLES**************************

knex.schema.createTable('student', (table) => {
	table.increments('id').primary();
	table.specificType('password', 'integer ARRAY');
	table.string('fname');
	table.string('lname');
	table.string('wvUId');
	table.timestamps();
	table.unique('wvUId');
  }).then(function () {
	console.log('Student Table is Created!');
  }).catch(err => console.log(err));

  knex.schema.createTable('activity', (table) => {
	table.increments('id').primary();
	table.string('code');
	table.string('wvname');
	table.string('wvUId');
	table.timestamps();
	table.date("expiry");
	table.boolean("status");
	table.unique('code');
  }).then(function () {
	console.log('Activity Table is Created!');
  }).catch(err => console.log(err));
  
  knex.schema.createTable('teacher', (table) => {
	table.increments('id').primary();
	table.string('fname');
	table.string('wvID');
	table.string('lname');
	table.string('email');
	table.timestamps();
	table.unique('wvID');
	table.unique('email')
  }).then(function () {
	console.log('Teacher Table is Created!');
  }).catch(err => console.log(err));

  knex.schema.createTable('roster', (table) => {
	table.increments('id').primary();
	table.string("rosterId")
	table.string('studentName');
	table.string('teacherName');
	table.string('activityCode').references("code").inTable("activity");
	table.integer('teacherID').references("id").inTable("teacher");
	table.string('studentID').references("id").inTable("student");
	table.timestamps();
	table.unique("rosterId")
  }).then(function () {
	console.log('Roster Table is Created!');
  }).catch(err => console.log(err));


  //****************************** SAMPLE KNEX *********************************************8
//   knex('movies').insert({title: 'Slaughterhouse Fiveness'}).then(data => console.log(data))

//   knex.select().table('movies')
//   .then(data => console.log(data))



app.get('/', (req, res) => {
	res.send( "Hello World!")
})

app.post('/logIn', (req, res) => {
	const {fname, lname, password} = req.body;
	let subquery = knex('student').where({fname: fname, lname: lname}).then(data => {
		if (data.length === 0) {
			res.send({"response": "user does not exists"})
		}else {
			if(data[0].password === password) {
				res.send({"response": "Loggged In"})

		}else {
			res.send({"response": "invalid Password"})

		}
	}
})
});


app.post('/register', (req, res) => {
	
	const {fname, lname, password} = req.body;
	
	let subquery = knex('student').where({fname: fname, lname: lname}).then(data => {
	if (data.length === 0) {
		knex('student').insert({fname: fname, lname: lname, password: password}).then(data => console.log("User Added"))
		res.send({"response": "user registered"})
	}else {
		console.log("user exists")
		res.send({"response": "user exists"})
	}
});

})

app.listen(4000);
 