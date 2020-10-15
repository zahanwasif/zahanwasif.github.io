import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Home from './screens/home';
import Error from './screens/error';

import './App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
	},
}));

function App() {
	const styles = useStyles();
	return (
		<React.Fragment>
			<Router>
				<Navbar />
				<Container>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route component={Error} />
					</Switch>
				</Container>
				<Footer />
			</Router>
		</React.Fragment>
	);
}

export default App;
