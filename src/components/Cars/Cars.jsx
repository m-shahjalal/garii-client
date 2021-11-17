import Car from './Car';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CircleLoader } from 'react-spinners';

const Cars = ({ products, loading, error }) => {
	return (
		<Container>
			<Typography
				variant='h3'
				color='grey'
				sx={{ mt: 10, mb: 4 }}
				align='center'>
				Trending Car
			</Typography>
			{loading ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
					<CircleLoader loading={loading} size={100} />
				</Box>
			) : error ? (
				<Typography
					align='center'
					variant='h5'
					sx={{ mb: 3 }}
					color='error'>
					Something went wrong
				</Typography>
			) : products ? (
				<Grid
					spacing={2}
					alignItems='stretch'
					justifyContent='center'
					container>
					{products?.length > 0 &&
						products.map((item) => (
							<Car item={item} key={item._id} />
						))}
				</Grid>
			) : null}
		</Container>
	);
};

export default Cars;
