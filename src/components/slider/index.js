import React from 'react';
import makeStyles from '@material-ui/core/styles/createStyles';
import { StylesProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const Slider = () => {
	const styles = useStyles();
	return (
		// <div className={styles.root}>
		<p>Slider</p>
		// </div>
	);
};
export default Slider;
