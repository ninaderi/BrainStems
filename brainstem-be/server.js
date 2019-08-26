// **************************THE SERVER IS BUILT ON knex.JS, THE DB FOR DEVELOPMENT IN SQLITE3 *****************************************************
// ************************** DOCUMENTATION CAN BE FOUND AT knexjs.org******************************************************************************


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const Activities = require('./Activities')
const util = require('./appUtil')

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


// console.log(Activities)

// *****************************THE TABLES IN KNEX ARE INSTANTIATED BELOW FEEL FREE TO EDIT AND ADD NEW TABLES**************************

knex.schema.createTable('student', (table) => {
	table.increments('id').primary();
	// table.specificType('password', 'integer ARRAY');
	table.string('studentfname');
	table.string('studentlname');
	table.string('wvUId');
	table.timestamps();
	table.unique('wvUId');
  }).then(function () {
	console.log('Student Table is Created!');
  }).catch(err => console.log(err));

  knex.schema.createTable('activity', (table) => {
	table.increments('id').primary();
	table.string('activityCode');
	table.string('wvId');
	table.string('classRoomName');
	table.string('name');
	table.string('img');
	table.string('grade');
	table.timestamps();
	table.date("expiry");
	table.boolean("status");
	table.unique('activityCode');
  }).then(function () {
	console.log('Activity Table is Created!');
  }).catch(err => console.log(err));

 
  knex.schema.createTable('teacher', (table) => {
	table.increments('id').primary();
	table.string('teacherfname');
	table.string('teacherlname');
	table.string('wvID');
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
	table.string('studentfname');
	table.string('studentlname');
	table.string('password');

	table.string('teacherfname');
	table.string('teacherlname');

	table.string('activityCode').references("activityCode").inTable("activity");
	table.integer('teacherID').references("id").inTable("teacher");
	table.string('studentID').references("id").inTable("student");
	table.timestamps();
	table.unique("rosterId")
  }).then(function () {
	console.log('Roster Table is Created!');
  }).catch(err => console.log(err));


  for(let x = 0; x<7; x++) {
	activityCode = util.generateActivityCode(8)
	knex("activity").insert({
		activityCode: activityCode,
		wvID: Activities.Activities[x].id,
		grade: Activities.Activities[x].grade,
		expiry: "TBD",
		status: 1,
		name: Activities.Activities[x].name,
		img: Activities.Activities[x].img,
		classRoomName: "EvolveU cohort 1",
		created_at: new Date(),
	}).then(data => console.log(data))
  }
  
  for(let x = 7; x<9; x++) {
	activityCode = util.generateActivityCode(8)
	  knex("activity").insert({
		  activityCode: activityCode,
		  wvID: Activities.Activities[x].id,
		  grade: Activities.Activities[x].grade,
		  expiry: "TBD",
		  status: 0,
		  name: Activities.Activities[x].name,
		  img: Activities.Activities[x].img,
		  created_at: new Date(),
		  classRoomName: "EvolveU cohort 2"
	  }).then(data => console.log(data))
	}




app.get('/', (req, res) => {
	res.send( "Hello World!")
})

app.get('/activities', (req, res) => {
	res.send(Activities)
})

app.post('/addActivity', (req, res) => {
	
	let activityCode = util.generateActivityCode(8);
	console.log("are you working", req.body)
	try {
	knex('activity').insert({
		activityCode: activityCode,
	wvId: req.body.wvId,
	expiry: "TBD",
	status: true,
	classRoomName: req.body.classRoomName,
	grade: req.body.grade,
	created_at: new Date(),
	img: req.body.img

	}).then(data => res.send({status: "activity added"}))
	
} catch(err) {
	console.log(err)
}
	
})

app.post('/verifyCode', (req, res) => {
	console.log("the verify function is running")
	knex('activity').where({activityCode: req.body.activityCode}).then(data => {
		res.send({data: data[0]})})
	
	
	
})

app.get('/exsistingActivities', (req, res) => {
	
	knex('activity').select()
		.then(data => {res.send({data})})
	
})

app.post('/logIn', (req, res) => {
	const {studentfname, studentlname, password} = req.body;
	knex('roster').where({studentfname: studentfname, studentlname: studentlname}).then(data => {
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
	
	const {studentfname, studentlname, password} = req.body;
	
	knex('student').where({studentfname: studentfname, studentlname: studentlname}).then(data => {
		if (data.length === 0) {
			knex('student').insert({studentfname: studentfname, studentlname: studentlname}).then(
				console.log("User Added to student table"))
			knex('roster').insert({studentfname: studentfname, studentlname: studentlname, password: password}).then(
				console.log("User Added to roster table"))
			
			res.send({"response": "user registered"})
		} else {
			console.log("user exists")
			res.send({"response": "user exists"})
		}
});

})

const PORT = 4000;
app.listen(PORT, function () {
	console.log(`server ready and listening on ${PORT}`);
});
