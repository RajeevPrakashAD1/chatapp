const catchAsync = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((err) => next(err));
	};
};

const mongoose = require('mongoose');

const CustomRoom = require('./schema.js');

exports.createRoom = catchAsync(async (req, res, next) => {
	const newRoom = await CustomRoom.create(req.body);
	res.send({ status: 'message inserted successfully', room: newRoom });
	res.status(200);
});

exports.getRoom = catchAsync(async (req, res, next) => {
	const data = await CustomRoom.find();
	res.send({ data: data });
});
