const { response } = require('express');
const mongoose = require('mongoose');

const Room = require('./roomSchema.js');

const catchAsync = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch((err) => next(err));
	};
};

exports.home = catchAsync(async (req, res, next) => {
	res.send({ status: 'No such routes' });
});

exports.createRoom = catchAsync(async (req, res, next) => {
	const newRoom = await Room.create(req.body);
	res.send({ status: 'message inserted successfully', room: newRoom });
	res.status(200);
});

exports.getRoom = catchAsync(async (req, res, next) => {
	const rooms = await Room.find();
	res.send({
		status: 'sucess',
		length: rooms.length,
		data: {
			rooms
		}
	});
	res.status(200);
});

// exports.getScheduledRoom = catchAsync(async (req, res, next) => {
// 	const rooms = await ScheduledRoom.find();
// 	res.send({
// 		status: 'sucess',
// 		length: rooms.length,
// 		data: {
// 			rooms
// 		}
// 	});
// 	res.status(200);
// });

// exports.delteLiveRoom = catchAsync(async (req, res, next) => {
// 	console.log('delte room request = ', req.body.channelName);
// 	const status = await LiveRoom.deleteOne({ channelName: req.body.channelName });
// 	res.send({ channelName: req.body.channelName });
// });

// exports.delteScheduledRoom = catchAsync(async (req, res, next) => {
// 	const status = await ScheduledRoom.deleteOne({ channelName: req.body.channelName });
// 	res.send({ channelName: req.body.channelName });
// });
// exports.updateHost = catchAsync(async (req, res, next) => {
// 	console.log('new host name == ', req.body.hostName);
// 	const status = await LiveRoom.findOneAndUpdate(
// 		{ channelName: req.body.channelName },
// 		{ hostName: req.body.hostName, userId: req.body.userId }
// 	);
// 	res.send({ status: status, newhostname: req.body.hostName });
// });

// exports.getParticularLiveRooms = catchAsync(async (req, res, next) => {
// 	console.log('get particular room query', req.query);
// 	const rooms = await LiveRoom.find(req.query);
// 	res.send({ rooms: rooms });
// });
// exports.getParticularScheduledRooms = catchAsync(async (req, res, next) => {
// 	console.log('get particular scheduled  room query', req.query);
// 	const rooms = await ScheduledRoom.find(req.query);
// 	res.send({ rooms: rooms });
// });

// exports.getFilteredRoom = catchAsync(async (req, res, next) => {
//     let country = req.query.country;
//     let state = req.query.state;
//     let district = req.query.district;

//     const rooms = await LiveRoom.find({})
//                         .where('country').equals(country)
//                         .where('state').equals(state)
//                         .where('district').equals(district).exec(function(err,data){
//                             if(err){console.log(err);}
//                         else{res.send(rooms);res.status(200)}

//                 };
// subcategories
//         .find({})//grabs all subcategoris
//         .where('categoryId').ne([])//filter out the ones that don't have a category
//         .populate('categoryId')
//         .where('active').equals(true)
//         .where('display').equals(true)
//         .where('categoryId.active').equals(true)
//         .where('display').in('categoryId').equals(true)
//         .exec(function (err, data) {
//         if (err) {
//             console.log(err);
//             console.log('error returned');
//             res.send(500, { error: 'Failed insert' });
//         }

//         if (!data) {
//             res.send(403, { error: 'Authentication Failed' });
//         }

//         res.send(200, data);
//         console.log('success generate List');
//     });
