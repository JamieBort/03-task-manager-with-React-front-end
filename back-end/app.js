const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

// app.get('/hello', (req, res) => {
// 	res.send('Task Manger App');
// });

app.use('/api/v1/tasks', tasks);

// const port = 3000; // original port
const port = 4000; // using this one temporarily since the front end is using port 3000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		console.log('Connecting to database...');
		app.listen(port, console.log(`Server is listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
