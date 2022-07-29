const mongoose = require('mongoose');

const User = require('./userSchema.js');

const catchAsync = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((err) => next(err));
	};
};

exports.addUser = catchAsync(async (req, res) => {
	const user = await User.create(req.body);
	res.send({ user: user });
});

exports.removeUser = catchAsync(async (req, res) => {
	console.log('query to dlete', req.query, ' b = ', req.body);
	const removeUser = await User.deleteMany({ ...req.query, ...req.body });
	res.send({ removeUser: removeUser });
});

exports.getUser = catchAsync(async (req, res) => {
	const users = await User.find(req.query);
	res.send({ users: users });
});

exports.updateUser = catchAsync(async (req, res) => {
	console.log('new update user == ', req.body);
	const status = await User.findOneAndUpdate({ socket_id: req.body.socket_id }, { role: req.body.role });
	res.send({ user: status });
});
