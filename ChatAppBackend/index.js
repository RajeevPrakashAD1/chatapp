const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const server = require('./server');
const RoomRoute = require('./room/routes');
// const RoomInfoRoute = require('./room_info/routes');
const userRoute = require('./users/routes');
const messageRoute = require('./messages/routes');

const PORT = process.env.PORT || 8080;
const PORT2 = process.env.PORT || 8000;
var cors = require('cors');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(cors());

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(express.static('public'));

const connectString = 'mongodb+srv://rajeev:qwerasdf@cluster0.syoov.mongodb.net/ChatRoom?retryWrites=true&w=majority';

mongoose
	.connect(connectString, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(async (con) => {
		//console.log(con.connections);
		console.log('DB connection successful');
	})
	.catch((err) => console.log('database connection error', err));

app.use(RoomRoute);
app.use(userRoute);
app.use(messageRoute);

app.all('*', (req, res, next) => {
	console.log('req', req.originalUrl);

	const err = new Error('cant find this route');
	err.status = 'fail';
	err.statusCode = 410;
	next(err);
	//res.status(404);
	// res.send({
	// 	status: 'fail',
	// 	message: `Can't find ${req.originalUrl} on this server`
	// });
});

app.use((err, req, res, next) => {
	err.status = err.status || 'error';
	err.statusCode = err.statusCode || 500;

	res.status(err.statusCode);
	console.log(err);

	res.send({
		status: 'fail',
		err: err.message
	});
});

// server.listen(PORT2, () => {
// 	console.log('listening on *:', PORT2);
// });

app.listen(PORT, () => {
	console.log('listening on port = ', PORT);
});
