import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { CircleLoader } from 'react-spinners';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Product } from '../contexts/ProductContext';

const Single = () => {
	const { id } = useParams();
	const [isAdded, setIsAdded] = useState(false);
	const { loading, single, getSingleProduct, cart, addToCart } =
		useContext(Product);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getSingleProduct(id), [id]);
	useEffect(() => {
		const added = cart.find((item) => parseInt(item.id) === parseInt(id));
		setIsAdded(added ? true : false);
	}, [cart, id]);

	return (
		<Container>
			{loading ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mb: 2,
						alignItems: 'center',
						minHeight: '500px',
					}}>
					<CircleLoader loading={loading} size={100} />
				</Box>
			) : single ? (
				<>
					<Typography
						variant='h3'
						align='center'
						sx={{ mt: 10, mb: 4 }}>
						Product details
					</Typography>
					<Card
						sx={{
							mb: 10,
							boxShadow: '3px 3px 29px rgba(0,0,0,.1)',
						}}>
						<CardMedia
							component='img'
							height='600'
							sx={{
								objectFit: 'contain',
								p: 4,
							}}
							image={single.image}
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'>
								{single.title}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{single.description}
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								display: 'flex',
								justifyContent: 'center',
								mb: 4,
							}}>
							<Button
								variant='contained'
								disabled={isAdded}
								onClick={() =>
									addToCart({ ...single, count: 1 })
								}>
								{isAdded ? (
									<>
										<AddShoppingCartOutlinedIcon
											sx={{ mr: 1 }}
										/>
										Add to Cart
									</>
								) : (
									<Typography>Already Added</Typography>
								)}
							</Button>
							<Button variant='outlined'>
								<LocalShippingRoundedIcon sx={{ mr: 1 }} />
								Process to shipping
							</Button>
						</CardActions>
					</Card>
				</>
			) : null}
		</Container>
	);
};

export default Single;
