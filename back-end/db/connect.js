// db/connect.js

const mongoose = require('mongoose');

const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
};

// Replace <password> with the password for the JamieBort user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
// Having trouble connecting? View our troubleshooting documentation
// https://docs.atlas.mongodb.com/troubleshoot-connection/

// const connectionString ='mongodb+srv://JamieBort:<password>@nodeexpresscourse.jrqvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// NOTE - I changed the database name from "myFirstDatabase" to "03-TASK-MANAGER".

// const connectionString ='mongodb+srv://JamieBort:<password>@nodeexpresscourse.jrqvh.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

// mongoose
// 	.connect(connectionString, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log('CONNECT TO THE DB...'))
// 	.catch((err) => console.log(err));

module.exports = connectDB;
