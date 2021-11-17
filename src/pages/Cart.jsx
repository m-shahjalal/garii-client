import { Typography, Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import { Product } from '../contexts/ProductContext';

const Cart = ({ removeFromCart }) => {
	const { cart, updateCart, clearCart } = useContext(Product);

	return (
		<Box>
			{cart.length > 0 ? (
				<Container>
					<Typography
						variant='h4'
						align='center'
						sx={{ mt: 8, mb: 4 }}>
						Your Cart
					</Typography>

					<Typography variant='h5' align='center' sx={{ mt: 3 }}>
						<Button onClick={clearCart}>Clear cart</Button>
					</Typography>
					<Grid
						spacing={4}
						container
						justifyContext='center'
						alignItems='center'>
						{cart.map((item) => (
							<CartItem
								key={item._id}
								id={item._id}
								title={item.title}
								image={item.image}
								price={parseInt(item.price)}
								count={item.count}
								updateCart={updateCart}
							/>
						))}
					</Grid>
					<Grid
						container
						justifyContent='center'
						sx={{ mt: 3, mb: 6 }}>
						<Typography variant='h5' align='center' sx={{ mr: 3 }}>
							Total:
							{cart
								.map(
									(item) => parseInt(item.price) * item.count
								)
								.reduce((a, b) => a + b)
								.toFixed(2)}{' '}
							lacs
						</Typography>
						<Button
							variant='contained'
							component={Link}
							to={{
								pathname: '/purchase',
								state: [...cart],
							}}>
							Process to ship
						</Button>
					</Grid>
				</Container>
			) : (
				<>
					<Typography
						sx={{ mt: 8, mb: 30 }}
						variant='h4'
						align='center'>
						<Box>Sorry! no items in cart</Box>
						<Box>
							<Typography component={Link} to='/trending'>
								Order a product
							</Typography>
						</Box>
					</Typography>
				</>
			)}
		</Box>
	);
};

export default Cart;
