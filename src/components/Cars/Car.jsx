import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Product } from '../../contexts/ProductContext';

const Car = ({ item }) => {
	const [isAdded, setIsAdded] = useState(false);
	const { image, price, title, description, _id } = item;
	const { cart, addToCart } = useContext(Product);

	useEffect(() => {
		const added = cart.find((item) => item._id === _id);
		setIsAdded(added ? true : false);
	}, [cart, _id]);

	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card
				sx={{
					maxWidth: '100%',
					height: '96%',
					mb: 2,
					boxShadow: '3px 3px 20px rgba(0,0,0,0.1)',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
				}}>
				<CardMedia
					component='img'
					height='300'
					image={image}
					alt='green iguana'
					sx={{ objectFit: 'contain' }}
				/>
				<CardContent
					component={Link}
					to={`/products/${_id}`}
					sx={{
						cursor: 'pointer',
						textDecoration: 'none',
					}}>
					<Typography
						gutterBottom
						sx={{ color: '#333' }}
						variant='h5'
						component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
					<Typography
						variant='h6'
						sx={{ mt: 2, color: '#333' }}
						color='text.secondary'>
						{price}
					</Typography>
				</CardContent>
				<CardActions
					color='primary'
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mb: 3,
					}}>
					<Button
						sx={{ mr: 1 }}
						disabled={isAdded}
						variant='contained'
						onClick={() => addToCart({ ...item, count: 1 })}>
						<AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />
						{isAdded ? 'added' : 'cart'}
					</Button>
					<Button
						variant='outlined'
						component={Link}
						to={{
							pathname: '/purchase',
							state: [{ ...item, count: 1 }],
						}}>
						<LocalShippingRoundedIcon sx={{ mr: 1 }} />
						Ship
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Car;
