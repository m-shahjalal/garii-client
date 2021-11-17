import { Button, Divider, Toolbar } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Drawer = ({ admin, url, user, logout }) => {
	return (
		<div>
			<Toolbar sx={{ bgcolor: indigo[500] }}></Toolbar>

			<Button
				component={Link}
				sx={{ textDecoration: 'none', my: 1 }}
				to={`${url}`}>
				Dashboard
			</Button>
			<Divider />

			<Divider />
			<Button
				component={Link}
				sx={{ textDecoration: 'none', my: 1 }}
				to={`${url}/review`}>
				Review
			</Button>
			<Divider />
			<Button
				component={Link}
				sx={{ textDecoration: 'none', my: 1 }}
				to={`${url}/payment`}>
				Payment
			</Button>
			<Divider />
			{admin ? (
				<Box>
					<Button
						component={Link}
						sx={{ textDecoration: 'none', my: 1 }}
						to={`${url}/make-admin`}>
						Make Admin
					</Button>
					<Divider />
					<Button
						component={Link}
						sx={{ textDecoration: 'none', my: 1 }}
						to={`${url}/add-product`}>
						Add Product
					</Button>
					<Button
						component={Link}
						sx={{ textDecoration: 'none', my: 1 }}
						to={`${url}/manage-orders`}>
						Manage orders
					</Button>
					<Button
						component={Link}
						sx={{ textDecoration: 'none', my: 1 }}
						to={`${url}/manage-products`}>
						Manage products
					</Button>
					<Divider />
				</Box>
			) : (
				<Button
					component={Link}
					sx={{ textDecoration: 'none', my: 1 }}
					to={`${url}/orders`}>
					Orders
				</Button>
			)}
			<Divider />
			{user && (
				<Button onClick={logout} sx={{ my: 1 }}>
					Log out
				</Button>
			)}
		</div>
	);
};

export default Drawer;
