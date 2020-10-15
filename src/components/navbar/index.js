import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	navbar: {
		color: 'white',
		height: 110,
		backgroundColor: '#5555ff',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			height: 70,
		},
		'&:hover': {
			backgroundColor: 'black',
		},
	},
	imgContainer: {
		marginRight: theme.spacing(2),
	},
	img: {
		height: 100,
		width: 100,
		[theme.breakpoints.down('sm')]: {
			height: 40,
			width: 40,
		},
	},
	title: {
		marginLeft: 30,
	},
	toolbar: {
		justifyItems: 'space-betweem',
	},
}));

const Navbar = () => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<AppBar position='static' className={styles.navbar}>
				<Toolbar classname={styles.toolbar}>
					<IconButton className={styles.img}>
						<img className={styles.img} src={logo} alt='ZW' />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Navbar;
