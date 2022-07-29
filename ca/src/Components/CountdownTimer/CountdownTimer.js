import { useState, useEffect } from 'react';
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00'
};

const CountdownTimer = ({ countdownTimestampMs }) => {
	const [ remainingTime, setRemainingTime ] = useState(defaultRemainingTime);

	useEffect(
		() => {
			const intervalId = setInterval(() => {
				updateRemainingTime(countdownTimestampMs);
			}, 1000);
			return () => clearInterval(intervalId);
		},
		[ countdownTimestampMs ]
	);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	return (
		<div className="countdown-timer">
			<div className="countdays">
				<span className="two-numbers"> {remainingTime.days} </span> <span> days </span>
			</div>
			<div className="countdays">
				<span className="two-numbers"> {remainingTime.hours} </span> <span> hours </span>
			</div>
			<div className="countdays">
				<span className="two-numbers"> {remainingTime.minutes} </span> <span> minutes </span>
			</div>
			<div className="countdays">
				<span className="two-numbers"> {remainingTime.seconds} </span> <span> seconds </span>
			</div>
		</div>
	);
};

export default CountdownTimer;
