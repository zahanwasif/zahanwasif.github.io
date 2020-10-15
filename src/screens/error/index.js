import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Error = () => {
	let history = useHistory();

	useEffect(() => {
		history.push('/');
	});
	return <div></div>;
};

export default Error;
