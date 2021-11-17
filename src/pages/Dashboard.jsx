import {
	AppBar,
	Drawer as MUIDrawer,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import DashboardCom from '../components/Dashboard/DashboardCom';
import useAuth from '../hooks/useAuth';
import Orders from '../components/Dashboard/Orders';
import MakeAdmin from '../components/Dashboard/MakeAdmin';
import AddProduct from '../components/Dashboard/AddProduct';
import IsAdmin from '../app/IsAdmin';
import { useState } from 'react';
import { Box } from '@mui/system';
import Drawer from '../components/Dashboard/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Payment from '../components/Dashboard/Payment';
import Review from '../components/Dashboard/Review';
import ManageOrders from '../components/Dashboard/ManageOrders';
import ManageProduct from '../components/Dashboard/ManageProduct';
const drawerWidth = 160;

function Dashboard(props) {
	const { window } = props;
	const [toggle, setToggle] = useState(false);
	let { path, url } = useRouteMatch();
	const { admin, user, logout } = useAuth();
	const toggleHandler = () => setToggle(!toggle);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={toggleHandler}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Typography
						sx={{
							color: 'white',
							textDecoration: 'none',
							padding: '10px',
							lineHeight: 1.75,
							fontWeight: 'bold',
						}}
						component={NavLink}
						variant='h5'
						to='/'>
						GARII
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<MUIDrawer
					container={container}
					variant='temporary'
					open={toggle}
					onClose={toggleHandler}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}>
					<Drawer
						admin={admin}
						url={url}
						user={user ? true : false}
						logout={logout}
					/>
				</MUIDrawer>
				<MUIDrawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open>
					<Drawer
						admin={admin}
						url={url}
						user={user ? true : false}
						logout={logout}
					/>
				</MUIDrawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Switch>
					<Route exact path={path}>
						<DashboardCom />
					</Route>
					<Route exact path={`${path}/orders`}>
						<Orders />
					</Route>
					<Route exact path={`${path}/payment`}>
						<Payment />
					</Route>
					<Route exact path={`${path}/review`}>
						<Review />
					</Route>
					<IsAdmin path={`${path}/make-admin`}>
						<MakeAdmin />
					</IsAdmin>
					<IsAdmin path={`${path}/add-product`}>
						<AddProduct />
					</IsAdmin>
					<IsAdmin path={`${path}/manage-orders`}>
						<ManageOrders />
					</IsAdmin>
					<IsAdmin path={`${path}/manage-products`}>
						<ManageProduct />
					</IsAdmin>
				</Switch>
			</Box>
		</Box>
	);
}

export default Dashboard;
