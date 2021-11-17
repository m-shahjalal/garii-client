import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../pages/About';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Payment from '../pages/Payment';
import Purchase from '../pages/Purchase';
import Register from '../pages/Register';
import Servicing from '../pages/Servicing';
import Single from '../pages/Single';
import Trending from '../pages/Trending';
import Private from './Private';
const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Private exact path='/purchase'>
					<Purchase />
				</Private>
				<Route exact component={Home} path='/' />
				<Route exact component={Home} path='/home' />
				<Route exact component={About} path='/about-us' />
				<Route exact component={Login} path='/login' />
				<Route exact component={Register} path='/register' />
				<Route exact component={Account} path='/account' />
				<Route exact component={Servicing} path='/servicing' />
				<Route exact component={Trending} path='/trending' />
				<Private path='/dashboard'>
					<Dashboard />
				</Private>
				<Route exact component={Cart} path='/cart' />
				<Route exact component={Payment} path='/payment' />
				<Route exact component={Single} path='/products/:id' />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
