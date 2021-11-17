import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';

const ShipProducts = ({ state, total }) => {
	return (
		<Container sx={{ my: 3 }}>
			<Typography variant='h4' align='center' sx={{ my: 4 }}>
				Purchase Products
			</Typography>
			<Grid container spacing={3}>
				{state &&
					state.map((item) => (
						<Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
							<Card sx={{ height: 1 }}>
								<CardActionArea sx={{ height: 1 }}>
									<CardMedia
										component='img'
										height='150'
										image={item.image}
										alt='green iguana'
										sx={{ objectFit: 'contain' }}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant='h5'
											component='div'>
											{item.title}
										</Typography>
										<Typography
											variant='body1'
											color='text'>
											Per Price: {item.price}
										</Typography>
										<Typography
											variant='body1'
											color='text'>
											Quantity: {item.count}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))}
			</Grid>
			<Typography variant='h5' align='center' sx={{ mt: 3 }}>
				Total:
				{total} lacs
			</Typography>
		</Container>
	);
};

export default ShipProducts;
