import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { Box } from '@mui/system';

const ManageProduct = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState();

	const deleteProduct = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const index = products.findIndex((order) => order._id === id);
			const newList = [...products];
			newList.splice(index, 1);
			setProducts(newList);
			axios
				.delete(`/products/${id}`)
				.then(() => console.log('delete successfully'))
				.catch((err) => console.error(err));
		}
	};

	useEffect(() => {
		axios
			.get('/products')
			.then((res) => setProducts(res.data))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);
	return (
		<Container>
			<Grid container justifyContent='center' spacing={3}>
				{loading ? (
					<Grid container justifyContent='center' alignItems='center'>
						<Box sx={{ height: '500px' }}>
							<CircleLoader
								style={{ marginRight: 10 }}
								size={50}
							/>
						</Box>
					</Grid>
				) : products.length > 0 ? (
					products.map((item) => (
						<Grid key={item._id} item xs={12} md={6} lg={4}>
							<Card>
								<CardMedia
									component='img'
									alt='green iguana'
									height='140'
									image={item.image}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='div'>
										{item.title}
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'>
										{item.description}
									</Typography>
									<Typography
										variant='body2'
										color='text.secondary'>
										{item.price}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										variant='outlined'
										size='small'
										component={Link}
										to={`/products/${item._id}`}>
										Details
									</Button>
									<Button
										onClick={() => deleteProduct(item._id)}
										sx={{ ml: 1 }}
										size='small'
										variant='contained'
										color='error'>
										Delete
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))
				) : null}
			</Grid>
		</Container>
	);
};

export default ManageProduct;
